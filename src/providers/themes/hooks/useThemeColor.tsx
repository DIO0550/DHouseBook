import { useEffect, useMemo, useState } from 'react';
import { ThemeColor } from '../components/ThemeProvider/ThemeColor';

type Props = {
  initialValue: ThemeColor;
};

const useThemeColor = ({ initialValue }: Props) => {
  const [themeColor, setThemeColor] = useState<ThemeColor>(initialValue);

  useEffect(() => {
    const changeThemeColorCallback = (value: ThemeColor) => {
      setThemeColor(value);
    };

    // イベントを受け取る
    const remove = window.api.on.changeThemeColor(changeThemeColorCallback);

    return () => {
      remove();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const themeColorState = useMemo(
    () => ({
      themeColor,
      setThemeColor,
    }),
    [themeColor],
  );

  return {
    themeColorState,
  };
};

export type ThemeColorState = ReturnType<
  typeof useThemeColor
>['themeColorState'];
export { useThemeColor };
