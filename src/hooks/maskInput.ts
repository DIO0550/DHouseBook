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
  from: (value: string) => {},
} as const;

const maskInput = (
  current: string,
  mask: string | Array<RegExp | string>,
) => {};
