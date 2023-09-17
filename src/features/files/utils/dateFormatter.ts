export const DateFormat = {
  yyyyMMdd: 'yyyyMMdd',
} as const;

// 参考：https://qiita.com/egnr-in-6matroom/items/37e65bb642d2e158804c
export const dateFormatter = () => {
  const format = (): { [key in string]: (date: Date) => string } => ({
    hh: (date: Date) => `0${date.getHours()}`.slice(-2),
    h: (date: Date) => String(date.getHours()),
    mm: (date: Date) => `0${date.getUTCMinutes()}`.slice(-2),
    m: (date: Date) => String(date.getMinutes()),
    ss: (date: Date) => `0${date.getSeconds()}`.slice(-2),
    s: (date: Date) => String(date.getSeconds()),
    dd: (date: Date) => `0${date.getDate()}`.slice(-2),
    d: (date: Date) => String(date.getDate()),
    yyyy: (date: Date) => String(date.getFullYear()),
    MM: (date: Date) => `0${date.getMonth() + 1}`.slice(-2),
    M: (date: Date) => String(date.getMonth() + 1),
  });

  const fmt = format();

  return {
    toString: (date: Date, formatValue: string) => {
      const prop = Object.keys(fmt);
      const result = prop.reduce(
        (prev, fmtKey) => prev.replace(fmtKey, fmt[fmtKey](date)),
        formatValue,
      );

      return result;
    },
  };
};
