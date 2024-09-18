import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

export type Option = {
  value: string;
  label: string;
};

type Props = {
  value?: string;
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
  const selectRect = select.getBoundingClientRect();
  const menuRect = menu.getBoundingClientRect();
  const MARGIN = 4;

  const isTop =
    document.body.getBoundingClientRect().height <
    selectRect.bottom + menuRect.height;

  menu.style.width = `${selectRect.width}px`;
  menu.style.left = `${selectRect.left}px`;

  if (!isTop) {
    menu.style.top = ``;
    menu.style.bottom = `${selectRect.top + MARGIN}px`;
  } else {
    menu.style.top = `${selectRect.bottom + MARGIN}px`;
    menu.style.bottom = ``;
  }
};

const useSelect = ({
  value,
  defaultValue,
  options = [] as Option[],
}: Props) => {
  // Ref
  const selectRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  // 選択中の値
  const [selectValue, setSelectValue] = useState(defaultValue);

  const currentValue = useMemo(() => {
    if (value) {
      return value;
    }

    return selectValue;
  }, [value, selectValue]);

  // 選択中の値のラベル
  const label = useMemo(() => {
    const selectedOption = options.find(
      (option) => option.value === currentValue,
    );
    if (selectedOption === undefined) {
      return NoSelectOption.Label;
    }

    return selectedOption.label;
  }, [currentValue, options]);

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
        setSelectValue(selectedValue);
      } else {
        setSelectValue(NoSelectOption.Value);
      }
    },
    [options],
  );

  useEffect(() => {
    if (!options.some((option) => option.value === selectValue)) {
      setSelectValue(NoSelectOption.Value);
    }
  }, [options, selectValue]);

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      entries.forEach((e) => {
        if (!selectRef.current || !menuRef.current) {
          return;
        }

        if (e.target !== selectRef.current) {
          return;
        }

        updateMenuClientRect(selectRef.current, menuRef.current);
      });
    });

    if (selectRef.current) {
      observer.observe(selectRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return {
    selectRef,
    menuRef,
    currentValue,
    label,
    selectOption,
    isOpenMenu,
    openMenu,
    closeMenu,
  };
};

export { useSelect };
