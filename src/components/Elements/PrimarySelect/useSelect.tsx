import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

export type Option = {
  value: string;
  label: string;
};

type Props = {
  defaultValue: string;
  options?: Option[];
};

export const NoSelectOption = {
  Value: '',
  Label: '',
};

const updateMenuClientRect = (
  select: HTMLButtonElement,
  menu: HTMLDivElement,
) => {
  // const parent = select.parentElement;
  const selectRect = select.getBoundingClientRect();
  const menuRect = menu.getBoundingClientRect();
  // const parentRect = parent?.getBoundingClientRect();

  const isTop =
    document.body.getBoundingClientRect().height <
    selectRect.bottom + menuRect.height;

  menu.style.width = `${selectRect.width}px`;
  menu.style.left = `${selectRect.left}px`;

  if (!isTop) {
    menu.style.top = ``;
    menu.style.bottom = `${selectRect.top}px`;
  } else {
    menu.style.top = `${selectRect.bottom}px`;
    menu.style.bottom = ``;
  }
};

const useSelect = ({ defaultValue, options = [] as Option[] }: Props) => {
  const selectRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const [value, setValue] = useState(defaultValue);
  const label = useMemo(() => {
    const selectedOption = options.find((option) => option.value === value);
    if (selectedOption === undefined) {
      return NoSelectOption.Label;
    }

    return selectedOption.label;
  }, [options, value]);

  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
  const openMenu = useCallback(() => {
    setIsOpenMenu(true);
    if (!selectRef.current || !menuRef.current) {
      return;
    }
    updateMenuClientRect(selectRef.current, menuRef.current);
  }, []);
  const closeMenu = useCallback(() => {
    setIsOpenMenu(false);
  }, []);

  const selectOption = useCallback(
    (selectedValue: string) => {
      if (options.some((option) => option.value === selectedValue)) {
        setValue(selectedValue);
      } else {
        setValue(NoSelectOption.Value);
      }
    },
    [options],
  );

  useEffect(() => {
    if (!options.some((option) => option.value === value)) {
      setValue(NoSelectOption.Value);
    }
  }, [options, value]);

  return {
    selectRef,
    menuRef,
    value,
    label,
    selectOption,
    isOpenMenu,
    openMenu,
    closeMenu,
  };
};

export { useSelect };
