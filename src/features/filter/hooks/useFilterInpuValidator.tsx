import { HouseBookFilter } from '@/stores/atoms/houseBookFilterState';
import { useCallback, useMemo, useState } from 'react';

type FilterInputValidate = {
  filterId: string;
  validate: boolean;
};

type Props = {
  filters: HouseBookFilter[];
};

const initValidates = (filters: HouseBookFilter[]): FilterInputValidate[] =>
  filters.map(
    (f) =>
      ({
        filterId: f.id,
        validate: false,
      } as FilterInputValidate),
  );

const useFilterInputValidator = ({ filters }: Props) => {
  const [validates, setValidates] = useState<FilterInputValidate[]>(
    initValidates(filters),
  );

  const addValidate = useCallback((filterId: string) => {
    const newValidate: FilterInputValidate = {
      filterId,
      validate: false,
    };
    setValidates((current) => [...current, newValidate]);
  }, []);

  const updateValidate = useCallback(
    (filterId: string, validate: boolean) => {
      const result = validates.map((v) => {
        if (v.filterId !== filterId) {
          return v;
        }

        return {
          ...v,
          validate,
        };
      });

      setValidates(result);
    },

    [validates],
  );

  const removeValidate = useCallback(
    (filterId: string) => {
      const result = validates.filter((v) => v.filterId !== filterId);
      setValidates(result);
    },
    [validates],
  );

  const validate = useMemo(
    () => validates.every((v) => v.validate),
    [validates],
  );

  return {
    validates,
    validate,
    addValidate,
    updateValidate,
    removeValidate,
  };
};

export { useFilterInputValidator };
