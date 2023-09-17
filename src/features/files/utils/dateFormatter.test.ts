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

  describe('h', () => {
    it.each`
      hour  | formatValue | expectValue
      ${12} | ${'h'}      | ${'12'}
      ${1}  | ${'h'}      | ${'1'}
      ${12} | ${'hhh'}    | ${'1212'}
      ${1}  | ${'hhh'}    | ${'011'}
      ${12} | ${'h-h'}    | ${'12-h'}
      ${1}  | ${'h-h'}    | ${'1-h'}
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

  describe('mm', () => {
    it.each`
      minutes | formatValue | expectValue
      ${30}   | ${'mm'}     | ${'30'}
      ${1}    | ${'mm'}     | ${'01'}
      ${30}   | ${'mmm'}    | ${'3030'}
      ${1}    | ${'mmm'}    | ${'011'}
      ${30}   | ${'mm-mm'}  | ${'30-30m'}
      ${1}    | ${'mm-mm'}  | ${'01-1m'}
    `(
      'minutesが$minutesのときにformatが$formatValueの場合は、$expectValueになる',
      ({
        minutes,
        formatValue,
        expectValue,
      }: {
        minutes: number;
        formatValue: string;
        expectValue: string;
      }) => {
        const mockDate = new Date(2021, 1, 1, 1, minutes, 1);

        const sut = dfmt.toString(mockDate, formatValue);
        expect(sut).toBe(expectValue);
      },
    );
  });

  describe('m', () => {
    it.each`
      minutes | formatValue | expectValue
      ${30}   | ${'m'}      | ${'30'}
      ${1}    | ${'m'}      | ${'1'}
      ${30}   | ${'mmm'}    | ${'3030'}
      ${1}    | ${'mmm'}    | ${'011'}
      ${30}   | ${'m-m'}    | ${'30-m'}
      ${1}    | ${'m-m'}    | ${'1-m'}
    `(
      'minutesが$minutesのときにformatが$formatValueの場合は、$expectValueになる',
      ({
        minutes,
        formatValue,
        expectValue,
      }: {
        minutes: number;
        formatValue: string;
        expectValue: string;
      }) => {
        const mockDate = new Date(2021, 1, 1, 1, minutes, 1);

        const sut = dfmt.toString(mockDate, formatValue);
        expect(sut).toBe(expectValue);
      },
    );
  });

  describe('ss', () => {
    it.each`
      second | formatValue | expectValue
      ${30}  | ${'ss'}     | ${'30'}
      ${1}   | ${'ss'}     | ${'01'}
      ${30}  | ${'sss'}    | ${'3030'}
      ${1}   | ${'sss'}    | ${'011'}
      ${30}  | ${'ss-ss'}  | ${'30-30s'}
      ${1}   | ${'ss-ss'}  | ${'01-1s'}
    `(
      'secondが$secondのときにformatが$formatValueの場合は、$expectValueになる',
      ({
        second,
        formatValue,
        expectValue,
      }: {
        second: number;
        formatValue: string;
        expectValue: string;
      }) => {
        const mockDate = new Date(2021, 1, 1, 1, 10, second);

        const sut = dfmt.toString(mockDate, formatValue);
        expect(sut).toBe(expectValue);
      },
    );
  });

  describe('s', () => {
    it.each`
      second | formatValue | expectValue
      ${30}  | ${'s'}      | ${'30'}
      ${1}   | ${'s'}      | ${'1'}
      ${30}  | ${'sss'}    | ${'3030'}
      ${1}   | ${'sss'}    | ${'011'}
      ${30}  | ${'s-s'}    | ${'30-s'}
      ${1}   | ${'s-s'}    | ${'1-s'}
    `(
      'secondが$secondのときにformatが$formatValueの場合は、$expectValueになる',
      ({
        second,
        formatValue,
        expectValue,
      }: {
        second: number;
        formatValue: string;
        expectValue: string;
      }) => {
        const mockDate = new Date(2021, 1, 1, 1, 10, second);

        const sut = dfmt.toString(mockDate, formatValue);
        expect(sut).toBe(expectValue);
      },
    );
  });

  describe('dd', () => {
    it.each`
      date  | formatValue | expectValue
      ${30} | ${'dd'}     | ${'30'}
      ${1}  | ${'dd'}     | ${'01'}
      ${30} | ${'ddd'}    | ${'3030'}
      ${1}  | ${'ddd'}    | ${'011'}
      ${30} | ${'dd-dd'}  | ${'30-30d'}
      ${1}  | ${'dd-dd'}  | ${'01-1d'}
    `(
      'dateが$dateのときにformatが$formatValueの場合は、$expectValueになる',
      ({
        date,
        formatValue,
        expectValue,
      }: {
        date: number;
        formatValue: string;
        expectValue: string;
      }) => {
        const mockDate = new Date(2021, 2, date, 1, 10, 1);

        console.log(mockDate.getDate());

        const sut = dfmt.toString(mockDate, formatValue);
        expect(sut).toBe(expectValue);
      },
    );
  });

  describe('d', () => {
    it.each`
      date  | formatValue | expectValue
      ${30} | ${'d'}      | ${'30'}
      ${1}  | ${'d'}      | ${'1'}
      ${30} | ${'ddd'}    | ${'3030'}
      ${1}  | ${'ddd'}    | ${'011'}
      ${30} | ${'d-d'}    | ${'30-d'}
      ${1}  | ${'d-d'}    | ${'1-d'}
    `(
      'dateが$dateのときにformatが$formatValueの場合は、$expectValueになる',
      ({
        date,
        formatValue,
        expectValue,
      }: {
        date: number;
        formatValue: string;
        expectValue: string;
      }) => {
        const mockDate = new Date(2021, 2, date, 1, 10, 1);

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

  describe('MM', () => {
    it.each`
      month | monthIndex | formatValue | expectValue
      ${12} | ${11}      | ${'MM'}     | ${'12'}
      ${1}  | ${0}       | ${'MM'}     | ${'01'}
      ${12} | ${11}      | ${'MMM'}    | ${'1212'}
      ${1}  | ${0}       | ${'MMM'}    | ${'011'}
      ${12} | ${11}      | ${'MM-MM'}  | ${'12-12M'}
      ${1}  | ${0}       | ${'MM-MM'}  | ${'01-1M'}
    `(
      'monthIndexが$monthIndexのとき($month月)にformatが$formatValueの場合は、$expectValueになる',
      ({
        monthIndex,
        formatValue,
        expectValue,
      }: {
        monthIndex: number;
        formatValue: string;
        expectValue: string;
      }) => {
        const mockDate = new Date(2021, monthIndex, 1, 1, 10, 1);

        const sut = dfmt.toString(mockDate, formatValue);
        expect(sut).toBe(expectValue);
      },
    );
  });

  describe('M', () => {
    it.each`
      month | monthIndex | formatValue | expectValue
      ${12} | ${11}      | ${'M'}      | ${'12'}
      ${1}  | ${0}       | ${'M'}      | ${'1'}
      ${12} | ${11}      | ${'MMM'}    | ${'1212'}
      ${1}  | ${0}       | ${'MMM'}    | ${'011'}
      ${12} | ${11}      | ${'M-M'}    | ${'12-M'}
      ${1}  | ${0}       | ${'M-M'}    | ${'1-M'}
    `(
      'monthIndexが$monthIndexのとき($month月)にformatが$formatValueの場合は、$expectValueになる',
      ({
        monthIndex,
        formatValue,
        expectValue,
      }: {
        monthIndex: number;
        formatValue: string;
        expectValue: string;
      }) => {
        const mockDate = new Date(2021, monthIndex, 1, 1, 10, 1);

        const sut = dfmt.toString(mockDate, formatValue);
        expect(sut).toBe(expectValue);
      },
    );
  });
});
