import { formatPrice } from '../../util/converter';

describe('converter', () => {
  it('formatPrice 1', () => {
    const result = formatPrice(1000);
    expect(result).toBe('1,000');
  });
});
