import {
  ChangeEvent,
  InputHTMLAttributes,
  KeyboardEvent,
  useCallback,
  useMemo,
  useState,
} from 'react';
import { InputEventEx } from '@/utils/extensions/InputEventEx';
import { MaskInputRegExp } from './maskInput';

type Props = {
  defaultValue?: InputHTMLAttributes<HTMLInputElement>['defaultValue'];
  mask: string | RegExp | Array<string | RegExp>;
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

  const defaultValue = useMemo(
    () => MaskInputRegExp.defaultValue(maskInputRegExp, initValue),
    [initValue, maskInputRegExp],
  );

  const [value, setValue] = useState(defaultValue);

  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (!e.currentTarget.value) {
        return;
      }

      if (InputEventEx.isComposing(e.nativeEvent)) {
        console.log('InputEventEx.isComposing(e.nativeEvent)');

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

  const onKeyDown = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      if (!e.nativeEvent.isComposing) {
        return;
      }

      if (e.key !== 'Process' || e.code !== 'Enter') {
        return;
      }

      const { selectionStart } = e.currentTarget;
      const result = MaskInputRegExp.exec(
        maskInputRegExp,
        e.currentTarget.value,
      );
      setValue((cur) => {
        setValue(MaskInputRegExp.exec(maskInputRegExp, cur));

        return result;
      });

      e.currentTarget.value = result;
      e.currentTarget.setSelectionRange(selectionStart, selectionStart);
    },
    [maskInputRegExp],
  );

  return { onChange, onKeyDown, defaultValue, value };
};

export { useInputMask };
