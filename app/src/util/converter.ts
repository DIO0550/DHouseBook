const zeroPadding = (num: number, zeroCount: number): string => {
  let padding = '';
  for (let i = 0; i < zeroCount; i += 1) {
    padding += '0';
  }

  return (padding + String(num)).slice(-zeroCount);
};

const formatSaveData = (target: Record<string, unknown>): Array<unknown> => {
  const formatTarget: unknown[] = [];
  if (typeof target !== 'object' || target === null) {
    return formatTarget;
  }

  const keys: string[] = Object.keys(target);
  for (let i = 0; i < keys.length; i += 1) {
    const key = keys[i];
    const item = target[key];
    formatTarget.push(item);
  }

  return formatTarget;
};

/**
 * 対象を価格表示に変換する
 * @param target
 */
const formatPrice = (target: string | number): string => {
  const priceStr = typeof target === 'number' ? String(target) : target;

  // 3桁以下なら、そのまま返す
  const len = priceStr.length;
  if (len <= 3) {
    return priceStr;
  }

  let formatResult = '';
  let i = 3;
  while (i < len) {
    formatResult = `${priceStr.substr(-i, 3)}${formatResult}`;
    formatResult = `,${formatResult}`;
    i += 3;
  }

  formatResult = `${priceStr.substr(0, len - (i - 3))}${formatResult}`;

  return formatResult;
};

export { zeroPadding, formatSaveData, formatPrice };
