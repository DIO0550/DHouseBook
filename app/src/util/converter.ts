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
  let i = 0;
  while (i <= len) {
    formatResult += priceStr.slice(i, i + 2);
    formatResult = `,${formatResult}`;
    i += 3;
  }

  if (formatResult.startsWith(',')) {
    formatResult = formatResult.slice(1);
  }

  return formatResult;
};

export { zeroPadding, formatSaveData, formatPrice };
