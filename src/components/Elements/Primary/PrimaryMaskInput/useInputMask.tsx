import {
  ChangeEvent,
  InputHTMLAttributes,
  KeyboardEvent,
  useCallback,
  useMemo,
  useRef,
} from 'react';
import { InputEventEx } from '@/utils/extensions/InputEventEx';
import { BeforeInputEvent } from '@/types/inputType';
import { InputSelection, MaskInputRegExp } from './maskInput';

type Props = {
  defaultValue?: InputHTMLAttributes<HTMLInputElement>['defaultValue'];
  mask: string | RegExp | Array<string | RegExp>;
  maskPlaceholder?: string;
};

const ChangeEventType = {
  None: '',
  Cut: 'cut',
  Input: 'input',
  BackSpace: 'Backspace',
  Delete: 'Delete',
} as const;
type ChangeEventType = (typeof ChangeEventType)[keyof typeof ChangeEventType];

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

  const changeType = useRef<ChangeEventType>(ChangeEventType.None);
  const beforeInputData = useRef<string>('');
  const selectedInputStart = useRef(0);
  const selectedInputEnd = useRef(0);
  const prevValue = useRef<string>(defaultValue);

  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (!e.currentTarget.value) {
        return;
      }

      if (InputEventEx.isComposing(e.nativeEvent)) {
        return;
      }

      const { currentTarget } = e;
      const prev = prevValue.current;
      const inputSelection = InputSelection.from(
        selectedInputStart.current,
        selectedInputEnd.current,
      );

      let result: { value: string; index: number };
      switch (changeType.current) {
        case ChangeEventType.BackSpace:
          result = MaskInputRegExp.execByBackSpace({
            mask: maskInputRegExp,
            inputValue: prev,
            selection: inputSelection,
          });
          break;
        case ChangeEventType.Input:
          result = MaskInputRegExp.exec({
            mask: maskInputRegExp,
            currentValue: currentTarget.value,
            prevValue: prev,
            inputData: beforeInputData.current,
            selection: inputSelection,
          });
          break;
        case ChangeEventType.Cut:
          result = MaskInputRegExp.execByCut({
            mask: maskInputRegExp,
            inputValue: prev,
            selection: inputSelection,
          });
          break;

        case ChangeEventType.Delete:
          result = MaskInputRegExp.execByDelete({
            mask: maskInputRegExp,
            inputValue: prev,
            selection: inputSelection,
          });
          break;

        default:
          result = {
            value: prevValue.current,
            index: currentTarget.selectionStart || 0,
          };
          break;
      }

      e.currentTarget.value = result.value;
      prevValue.current = result.value;
      currentTarget.setSelectionRange(result.index, result.index);
      changeType.current = ChangeEventType.None;
      beforeInputData.current = '';
      selectedInputStart.current = 0;
      selectedInputEnd.current = 0;
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

    changeType.current = ChangeEventType.Input;
    beforeInputData.current = e.data;
  }, []);

  const onKeyDown = useCallback((e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !e.nativeEvent.isComposing) {
      changeType.current = ChangeEventType.BackSpace;

      return;
    }

    if (e.key === 'Delete' && !e.nativeEvent.isComposing) {
      changeType.current = ChangeEventType.Delete;

      return;
    }

    if (!e.nativeEvent.isComposing) {
      return;
    }

    if ((e.key !== 'Process' && e.key !== 'Backspace') || e.code !== 'Enter') {
      // TODO: 入力確定前
    }

    // TODO:: IME確定時の処理
  }, []);

  const onCut = useCallback(() => {
    changeType.current = ChangeEventType.Cut;
  }, []);

  const onSelect = useCallback((e: React.SyntheticEvent<HTMLInputElement>) => {
    const { selectionStart, selectionEnd } = e.currentTarget;

    if (selectionStart !== null) {
      selectedInputStart.current = selectionStart;
    }

    if (selectionEnd !== null) {
      selectedInputEnd.current = selectionEnd;
    }
  }, []);

  return {
    onChange,
    onKeyDown,
    onBeforeInput,
    onCut,
    onSelect,
    defaultValue,
  };
};

export { useInputMask };
