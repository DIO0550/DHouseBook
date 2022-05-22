import { formatPrice } from '../../util/converter';

describe('converter', () => {
  it('formatPrice 10 decimal 2', () => {
    const result = formatPrice(10);
    expect(result).toBe('10');
  });

  it('formatPrice 100 decimal 3', () => {
    const result = formatPrice(100);
    expect(result).toBe('100');
  });

  it('formatPrice 1000 decimal 4', () => {
    const result = formatPrice(1000);
    expect(result).toBe('1,000');
  });

  it('formatPrice 10000 decimal 5', () => {
    const result = formatPrice(10000);
    expect(result).toBe('10,000');
  });

  it('formatPrice 100000 decimal 6', () => {
    const result = formatPrice(100000);
    expect(result).toBe('100,000');
  });

  it('formatPrice 1000000 decimal 7', () => {
    const result = formatPrice(1000000);
    expect(result).toBe('1,000,000');
  });
  it('formatPrice 10000000 decimal 8', () => {
    const result = formatPrice(10000000);
    expect(result).toBe('10,000,000');
  });

  it('formatPrice 100000000 decimal 9', () => {
    const result = formatPrice(100000000);
    expect(result).toBe('100,000,000');
  });
});
