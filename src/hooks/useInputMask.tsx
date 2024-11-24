import { ChangeEvent, useCallback } from 'react';

type Props = {
  mask: string | Array<string | RegExp>;
};

const maskValue = (value: string, mask: RegExp) => {
  const match = mask.exec(value);

  if (!match?.indices) {
    return '';
  }

  const result = value.substring(match.indices[0][0], match.indices[0][1]);

  return result;
};

const useInputMask = ({ mask }: Props) => {
  const maskInputValue = useCallback(
    (value: string) => {
      const maskReg = new RegExp(mask, 'd');
      const result = maskValue(value, maskReg);

      return result;
    },
    [mask],
  );
  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (!e.currentTarget.value) {
        return;
      }
      const maskReg = new RegExp(mask, 'd');
      const result = maskValue(e.currentTarget.value, maskReg);

      e.currentTarget.value = result;
    },
    [mask],
  );

  return { onChange, maskInputValue };
};

export { useInputMask };
