import { dateFormatter } from './dateFormatter';

const dfmt = dateFormatter();

describe('dateFormatter', () => {
  describe('hh', () => {
    it.each`
      hour  | formatValue | expectValue
      ${12} | ${'hh'}     | ${'12'}
      ${1}  | ${'hh'}     | ${'01'}
      ${12} | ${'hhh'}    | ${'1212'}
      ${1}  | ${'hhh'}    | ${'011'}
      ${12} | ${'hh-hh'}  | ${'12-12h'}
      ${1}  | ${'hh-hh'}  | ${'01-1h'}
    `(
      'hourが$hourのときにformatが$formatValueの場合は、$expectValueになる',
      ({
        hour,
        formatValue,
        expectValue,
      }: {
        hour: number;
        formatValue: string;
        expectValue: string;
      }) => {
        const mockDate = new Date(2021, 1, 1, hour, 1, 1);

        const sut = dfmt.toString(mockDate, formatValue);
        expect(sut).toBe(expectValue);
      },
    );
  });
  describe('yyyy', () => {
    it.each`
      year    | formatValue    | expectValue
      ${2021} | ${'yyyy'}      | ${'2021'}
      ${2021} | ${'yyyyy'}     | ${'2021y'}
      ${2021} | ${'yyyy-yyyy'} | ${'2021-yyyy'}
    `(
      'yearが$yearのときにformatが$formatValueの場合は、$expectValueになる',
      ({
        year,
        formatValue,
        expectValue,
      }: {
        year: number;
        formatValue: string;
        expectValue: string;
      }) => {
        const mockDate = new Date(year, 1);

        const sut = dfmt.toString(mockDate, formatValue);
        expect(sut).toBe(expectValue);
      },
    );
  });
});
