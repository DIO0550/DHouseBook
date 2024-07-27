import { useCallback, useEffect, useState } from 'react';

export type Option = {
  value: string;
  label: string;
};

type Props = {
  defaultValue: string;
  options?: Option[];
};

export const NoSelectValue = '';

const useSelect = ({ defaultValue, options = [] as Option[] }: Props) => {
  const [value, setValue] = useState(defaultValue);

  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
  const openMenu = useCallback(() => {
    setIsOpenMenu(true);
  }, []);
  const closeMenu = useCallback(() => {
    setIsOpenMenu(false);
  }, []);

  const selectOption = useCallback(
    (selectedValue: string) => {
      if (options.some((option) => option.value === selectedValue)) {
        setValue(selectedValue);
      } else {
        setValue(NoSelectValue);
      }
    },
    [options],
  );

  useEffect(() => {
    if (!options.some((option) => option.value === value)) {
      setValue(NoSelectValue);
    }
  }, [options, value]);

  return {
    value,
    selectOption,
    isOpenMenu,
    openMenu,
    closeMenu,
  };
};

export { useSelect };
