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

  return priceStr;
};

export { zeroPadding, formatSaveData, formatPrice };
