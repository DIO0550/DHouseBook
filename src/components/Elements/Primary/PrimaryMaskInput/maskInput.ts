import { InputHTMLAttributes } from 'react';

export type MaskResult = {
  value: string;
  index: number;
};

export type MaskInputRegExp = (
  | {
      type: 'RegExpArray';
      value: Array<string | RegExp>;
    }
  | {
      type: 'RegExp';
      value: RegExp;
    }
) & { placeholder: string };

const RegExpMap: { [key in string]: RegExp } = {
  '9': /[0-9]/,
  a: /[a-zA-Z]/,
  A: /[a-zA-Z]/,
  '*': /[.]/,
};

type InputSelection = {
  start: number;
  end: number;
};
export const InputSelection = {
  from: (start: number | null, end: number | null): InputSelection => {
    if (start === null || end === null) {
      return {
        start: 0,
        end: 0,
      };
    }

    const startValue = start <= end ? start : end;
    const endValue = start <= end ? end : start;

    return {
      start: startValue,
      end: endValue,
    };
  },

  diff: (selection: InputSelection) => selection.end - selection.start,

  isRangeSelection: (selection: InputSelection) =>
    selection.start !== selection.end,
};

const correctDefaultValueLength = (
  maskLength: number,
  maskType: MaskInputRegExp['type'],
  defaultValue: InputHTMLAttributes<HTMLInputElement>['defaultValue'] = '',
) => {
  const stringValue = String(defaultValue);

  if (maskType === 'RegExp') {
    return stringValue;
  }

  const result = stringValue + ''.repeat(maskLength - stringValue.length || 0);

  return result;
};

export const MaskInputRegExp = {
  from: (
    value: RegExp | string | Array<string | RegExp>,
    placeholder: string = '_',
  ) => {
    if (value instanceof RegExp) {
      const result: MaskInputRegExp = {
        type: 'RegExp',
        value,
        placeholder,
      };

      return result;
    }

    if (Array.isArray(value)) {
      const result: MaskInputRegExp = {
        type: 'RegExpArray',
        value,
        placeholder,
      };

      return result;
    }

    const characters = Array.from(value);
    const regExpArray = characters.map((char) => {
      if (Object.hasOwn(RegExpMap, char)) {
        return RegExpMap[char];
      }

      return char;
    });

    const result: MaskInputRegExp = {
      type: 'RegExpArray',
      value: regExpArray,
      placeholder,
    };

    return result;
  },

  exec: ({
    mask,
    currentValue,
    prevValue,
    inputData,
    selection,
  }: {
    mask: MaskInputRegExp;
    currentValue: string;
    prevValue: string;
    inputData: string;
    selection: InputSelection;
  }): MaskResult => {
    const characters = [...currentValue];

    if (mask.type === 'RegExp') {
      const maskInputData = [...inputData].filter((char) =>
        mask.value.test(char),
      );
      const result =
        prevValue.substring(0, selection.start) +
        maskInputData.join('') +
        prevValue.substring(selection.end);

      return { value: result, index: selection.start + maskInputData.length };
    }

    if (!prevValue || !inputData) {
      const result = mask.value.map((v, index) => {
        const char = characters[index];
        if (typeof v === 'string') {
          return v;
        }

        if (v.test(char)) {
          return char;
        }

        return mask.placeholder;
      });

      return { value: result.join(''), index: selection?.start };
    }

    const prevCharacters = [...prevValue];
    const inputDataCharacters = [...inputData];

    let needSelectedIndex = selection.start;
    const result = mask.value.map((v, index) => {
      const char = prevCharacters[index];
      if (index < selection.start) {
        return char;
      }

      if (inputDataCharacters.length <= 0) {
        return char;
      }

      if (typeof v === 'string') {
        return v;
      }

      while (inputDataCharacters.length > 0) {
        const inputCharacter = inputDataCharacters.shift();

        if (!inputCharacter) {
          break;
        }

        if (v.test(inputCharacter)) {
          needSelectedIndex = index + 1;

          return inputCharacter;
        }
      }

      return char;
    });

    return { value: result.join(''), index: needSelectedIndex };
  },

  execByBackSpace: ({
    mask,
    inputValue,
    selection,
  }: {
    mask: MaskInputRegExp;
    inputValue: string;
    selection: InputSelection;
  }): MaskResult => {
    console.log('execByBackSpace');
    if (InputSelection.isRangeSelection(selection)) {
      return MaskInputRegExp.execRangeDelete({
        mask,
        inputValue,
        selection,
      });
    }

    if (mask.type === 'RegExp') {
      const deleteIndex = selection.start - 1 < 0 ? 0 : selection.start - 1;
      const result =
        inputValue.substring(0, deleteIndex) +
        inputValue.substring(selection.end);

      return { value: result, index: selection.start - 1 };
    }

    const deleteIndex = Array.from({ length: selection.start })
      .map((_, i) => selection.start - i - 1)
      .find((index) => typeof mask.value[index] !== 'string');

    if (deleteIndex == null) {
      return { value: inputValue, index: selection.start };
    }

    const result =
      inputValue.substring(0, deleteIndex) +
      mask.placeholder +
      inputValue.substring(deleteIndex + 1);

    return { value: result, index: deleteIndex };
  },

  execByDelete: ({
    mask,
    inputValue,
    selection,
  }: {
    mask: MaskInputRegExp;
    inputValue: string;
    selection: InputSelection;
  }): MaskResult => {
    if (InputSelection.isRangeSelection(selection)) {
      return MaskInputRegExp.execRangeDelete({
        mask,
        inputValue,
        selection,
      });
    }

    if (mask.type === 'RegExp') {
      const result =
        inputValue.substring(0, selection.start) +
        inputValue.substring(selection.end + 1);

      return { value: result, index: selection.start };
    }

    const deleteIndex = Array.from({
      length: inputValue.length - selection.end,
    })
      .map((_, i) => selection.end + i)
      .find((index) => typeof mask.value[index] !== 'string');

    if (deleteIndex == null) {
      return { value: inputValue, index: selection.end };
    }

    const result =
      inputValue.substring(0, deleteIndex) +
      mask.placeholder +
      inputValue.substring(deleteIndex + 1);

    return { value: result, index: deleteIndex + 1 };
  },

  execByCut: ({
    mask,
    inputValue,
    selection,
  }: {
    mask: MaskInputRegExp;
    inputValue: string;
    selection: InputSelection;
  }): MaskResult => {
    if (mask.type === 'RegExp') {
      const result =
        inputValue.substring(0, selection.start) +
        inputValue.substring(selection.end);

      return { value: result, index: selection.start };
    }

    if (InputSelection.isRangeSelection(selection)) {
      return MaskInputRegExp.execRangeDelete({
        mask,
        inputValue,
        selection,
      });
    }

    return { value: inputValue, index: selection.start };
  },

  execRangeDelete: ({
    mask,
    inputValue,
    selection,
  }: {
    mask: MaskInputRegExp;
    inputValue: string;
    selection: InputSelection;
  }): MaskResult => {
    if (!InputSelection.isRangeSelection(selection)) {
      return {
        value: inputValue,
        index: selection.start,
      };
    }

    if (mask.type === 'RegExp') {
      const result =
        inputValue.substring(0, selection.start) +
        inputValue.substring(selection.end, inputValue.length);

      return {
        value: result,
        index: selection.start,
      };
    }

    const deleteIndex = Array.from(
      { length: selection.end - selection.start },
      (_, i) => i + selection.start,
    );
    const deletePositionValue = deleteIndex
      .map((i) => {
        const maskValue = mask.value[i];
        if (!maskValue) {
          return '';
        }

        if (typeof maskValue === 'string') {
          return maskValue;
        }

        return mask.placeholder;
      })
      .join('');

    const result =
      inputValue.substring(0, selection.start) +
      deletePositionValue +
      inputValue.substring(selection.end, inputValue.length);

    return {
      value: result,
      index: selection.start,
    };
  },

  defaultValue: (
    mask: MaskInputRegExp,
    defaultValue: InputHTMLAttributes<HTMLInputElement>['defaultValue'] = '',
  ) => {
    const maskLength = Array.isArray(mask.value) ? mask.value.length : 0;

    return MaskInputRegExp.exec({
      mask,
      prevValue: correctDefaultValueLength(maskLength, mask.type, defaultValue),
      inputData: '',
      currentValue: '',
      selection: { start: 0, end: 0 },
    });
  },
} as const;
