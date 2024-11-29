import { ChangeEvent, useCallback, useMemo } from 'react';
import { MaskInputRegExp } from './maskInput';

type Props = {
  mask: string | Array<string | RegExp>;
  maskPlaceholder?: string;
};

const useInputMask = ({ mask, maskPlaceholder }: Props) => {
  const maskInputRegExp = useMemo(
    () => MaskInputRegExp.from(mask, maskPlaceholder),
    [mask, maskPlaceholder],
  );

  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (!e.currentTarget.value) {
        return;
      }

      const result = MaskInputRegExp.exec(
        maskInputRegExp,
        e.currentTarget.value,
      );
      e.currentTarget.value = result;
    },
    [maskInputRegExp],
  );

  return { onChange };
};

export { useInputMask };
