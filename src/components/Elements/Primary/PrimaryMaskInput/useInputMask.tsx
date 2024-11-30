import { ChangeEvent, InputHTMLAttributes, useCallback, useMemo } from 'react';
import { MaskInputRegExp } from './maskInput';

type Props = {
  defaultValue?: InputHTMLAttributes<HTMLInputElement>['defaultValue'];
  mask: string | Array<string | RegExp>;
  maskPlaceholder?: string;
};

const useInputMask = ({
  defaultValue: initValue,
  mask,
  maskPlaceholder,
}: Props) => {
  const maskInputRegExp = useMemo(
    () => MaskInputRegExp.from(mask, maskPlaceholder),
    [mask, maskPlaceholder],
  );

  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (!e.currentTarget.value) {
        return;
      }

      const { selectionStart } = e.currentTarget;
      const result = MaskInputRegExp.exec(
        maskInputRegExp,
        e.currentTarget.value,
      );
      e.currentTarget.value = result;
      e.currentTarget.setSelectionRange(selectionStart, selectionStart);
    },
    [maskInputRegExp],
  );

  const defaultValue = useMemo(
    () => MaskInputRegExp.defaultValue(maskInputRegExp, initValue),
    [initValue, maskInputRegExp],
  );

  return { onChange, defaultValue };
};

export { useInputMask };
