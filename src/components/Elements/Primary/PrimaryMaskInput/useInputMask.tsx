import {
  ChangeEvent,
  FormEventHandler,
  InputHTMLAttributes,
  KeyboardEvent,
  useCallback,
  useMemo,
  useRef,
  useState,
} from 'react';
import { InputEventEx } from '@/utils/extensions/InputEventEx';
import { BeforeInputEvent } from '@/types/inputType';
import { InputSelection, MaskInputRegExp } from './maskInput';

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
    () => MaskInputRegExp.defaultValue(maskInputRegExp, initValue).value,
    [initValue, maskInputRegExp],
  );

  const beforeInputData = useRef<string>('');
  const selectedInputStart = useRef(0);
  const selectedInputEnd = useRef(0);
  const [value, setValue] = useState(defaultValue);

  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (!e.currentTarget.value) {
        return;
      }

      if (InputEventEx.isComposing(e.nativeEvent)) {
        return;
      }

      const { selectionStart: currentSelected = 0 } = e.currentTarget;
      const { currentTarget } = e;

      setValue((cur) => {
        const result = MaskInputRegExp.exec(
          maskInputRegExp,
          currentTarget.value,
          cur,
          beforeInputData.current,
          InputSelection.from(
            selectedInputStart.current,
            selectedInputEnd.current,
          ),
        );

        currentTarget.value = result.value;
        currentTarget.setSelectionRange(result.index, result.index);

        beforeInputData.current = '';
        selectedInputStart.current = 0;
        selectedInputEnd.current = 0;

        return result.value;
      });
    },
    [maskInputRegExp],
  );

  const onBeforeInput = useCallback((e: BeforeInputEvent) => {
    if (!e.data) {
      return;
    }

    if (e.isComposing) {
      return;
    }

    const { selectionStart, selectionEnd } = e.target;
    if (selectionStart !== null) {
      selectedInputStart.current = selectionStart;
    }

    if (selectionEnd !== null) {
      selectedInputEnd.current = selectionEnd;
    }

    beforeInputData.current = e.data;
  }, []);

  const onKeyDown = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      const { selectionStart, selectionEnd } = e.currentTarget;
      if (!e.nativeEvent.isComposing) {
        // if (selectionStart !== null) {
        // }

        return;
      }

      if (e.key !== 'Process' || e.code !== 'Enter') {
        return;
      }

      // const result = MaskInputRegExp.exec(
      //   maskInputRegExp,
      //   e.currentTarget.value,
      // );

      // e.currentTarget.value = result;
      // setValue(result);
      // e.currentTarget.setSelectionRange(selectionStart, selectionStart);
    },
    [maskInputRegExp],
  );

  return { onChange, onKeyDown, onBeforeInput, defaultValue, value };
};

export { useInputMask };
