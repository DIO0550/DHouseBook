import { InputHTMLAttributes } from 'react';

/// A/B
/// 3333/B
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

  exec: (
    mask: MaskInputRegExp,
    currentValue: string,
    prevValue: string,
    inputData: string,
    selection: InputSelection,
  ): {
    value: string;
    index: number;
  } => {
    const characters = [...currentValue];

    if (mask.type === 'RegExp') {
      const result = characters.filter((char) => mask.value.test(char));

      return { value: result.join(''), index: selection.start };
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
  }) => {
    const characters = [...inputValue];

    if (mask.type === 'RegExp') {
      const result = characters.filter((char) => mask.value.test(char));

      return { value: result.join(''), index: selection.start };
    }

    if (InputSelection.isRangeSelection(selection)) {
      return MaskInputRegExp.execRangeDelete({
        mask,
        inputValue,
        selection,
      });
    }

    const deleteIndex = Array.from({ length: selection.start })
      .map((_, i) => selection.start - i - 1)
      .find((index) => typeof mask.value[index] !== 'string');

    if (!deleteIndex) {
      return { value: inputValue, index: selection.start };
    }

    const result =
      inputValue.substring(0, deleteIndex) +
      mask.placeholder +
      inputValue.substring(deleteIndex + 1);

    return { value: result, index: deleteIndex };
  },

  execRangeDelete: ({
    mask,
    inputValue,
    selection,
  }: {
    mask: MaskInputRegExp;
    inputValue: string;
    selection: InputSelection;
  }): {
    value: string;
    index: number;
  } => {
    if (InputSelection.isRangeSelection(selection)) {
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

  // exec: (
  //   mask: MaskInputRegExp,
  //   currentValue: string,
  //   prevValue: string,
  //   selection: ,
  // ) => {
  //   const characters = [...currentValue];

  //   if (mask.type === 'RegExp') {
  //     const result = characters.filter((char) => mask.value.test(char));

  //     return result.join('');
  //   }

  //   const lengthDiff = currentValue.length - prevValue.length;

  //   const result = mask.value.map((v, index) => {
  //     const char = characters[index];
  //     if (typeof v === 'string') {
  //       return v;
  //     }

  //     if (v.test(char)) {
  //       return char;
  //     }

  //     return mask.placeholder;
  //   });

  //   return result.join('');
  // },

  delete: (
    mask: MaskInputRegExp,
    currentValue: string,
    selection: InputSelection,
  ) => {
    if (mask.type === 'RegExp') {
      const result =
        currentValue.substring(0, selection.start) +
        currentValue.substring(selection.end, currentValue.length);

      return result;
    }

    if (InputSelection.isRangeSelection(selection)) {
      let deletePositionValue = '';
      for (let i = selection.start; i <= selection.end; i += 1) {
        const maskValue = mask.value[i];
        if (!maskValue) {
          deletePositionValue += '';

          // eslint-disable-next-line no-continue
          continue;
        }

        if (typeof maskValue === 'string') {
          deletePositionValue += maskValue;

          // eslint-disable-next-line no-continue
          continue;
        }

        deletePositionValue += mask.placeholder;
      }

      const result =
        currentValue.substring(0, selection.start) +
        deletePositionValue +
        currentValue.substring(selection.end, currentValue.length);

      return result;
    }

    let deletePosition = selection.start;
    while (deletePosition <= 0) {
      const maskValue = mask.value[deletePosition];

      if (typeof maskValue !== 'string') {
        break;
      }

      deletePosition -= 1;
    }

    if (deletePosition === 0) {
      return currentValue;
    }

    const result =
      currentValue.substring(0, deletePosition - 1) +
      mask.placeholder +
      currentValue.substring(deletePosition, currentValue.length);

    return result;
  },

  // exec2: (
  //   mask: MaskInputRegExp,
  //   currentValue: string,
  //   previousValue: string,
  //   selection: InputSelection,
  // ) => {},

  defaultValue: (
    mask: MaskInputRegExp,
    defaultValue: InputHTMLAttributes<HTMLInputElement>['defaultValue'] = '',
  ) => {
    const maskLength = Array.isArray(mask.value) ? mask.value.length : 0;

    return MaskInputRegExp.exec(
      mask,
      correctDefaultValueLength(maskLength, mask.type, defaultValue),
      '',
      '',
      { start: 0, end: 0 },
    );
  },
} as const;
