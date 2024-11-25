type MaskRegExp = {
  value: Array<string | RegExp>;
};

const RegExpMap: { [key in string]: RegExp } = {
  '9': /[0-9]/,
  a: /[a-zA-Z]/,
  A: /[a-zA-Z]/,
  '*': /[.]/,
};

const MaskRegExp = {
  from: (value: string) => {
    const characters = Array.from(value);
    const result = characters.map((char) => {
      if (Object.hasOwn(RegExpMap, char)) {
        return RegExpMap[char];
      }

      return char;
    });

    const maskRegExp: MaskRegExp = {
      value: result,
    };

    return maskRegExp;
  },
} as const;

const maskInput = (
  current: string,
  mask: string | Array<RegExp | string>,
) => {};
