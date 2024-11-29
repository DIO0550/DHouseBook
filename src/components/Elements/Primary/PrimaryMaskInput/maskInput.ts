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

  exec: (mask: MaskInputRegExp, value: string) => {
    const characters = [...value];

    if (mask.type === 'RegExp') {
      const result = characters.filter((char) => mask.value.test(char));

      return result.join('');
    }

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

    return result.join('');
  },
} as const;
