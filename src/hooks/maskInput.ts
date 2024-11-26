export type MaskRegExp = {
  values: Array<string | RegExp>;
  placeholder: string;
};

const RegExpMap: { [key in string]: RegExp } = {
  '9': /[0-9]/,
  a: /[a-zA-Z]/,
  A: /[a-zA-Z]/,
  '*': /[.]/,
};

export const MaskRegExp = {
  from: (value: string, placeholder: string = '_') => {
    const characters = Array.from(value);
    const result = characters.map((char) => {
      if (Object.hasOwn(RegExpMap, char)) {
        return RegExpMap[char];
      }

      return char;
    });

    const maskRegExp: MaskRegExp = {
      values: result,
      placeholder,
    };

    return maskRegExp;
  },

  exec: (mask: MaskRegExp, value: string) => {
    const characters = [...value];

    const result = mask.values.map((v, index) => {
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
