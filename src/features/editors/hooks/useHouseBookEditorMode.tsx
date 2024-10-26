import { useCallback, useState } from 'react';

export const HouseBookEditorMode = {
  Normal: 'Normal',
  Select: 'Select',
} as const;

export type HouseBookEditorMode =
  (typeof HouseBookEditorMode)[keyof typeof HouseBookEditorMode];

const useHouseBookEditorMode = () => {
  const [mode, setMode] = useState<HouseBookEditorMode>(
    HouseBookEditorMode.Normal,
  );

  const changeMode = useCallback((value: HouseBookEditorMode) => {
    setMode(value);
  }, []);

  return {
    mode,
    changeMode,
  };
};

export { useHouseBookEditorMode };
