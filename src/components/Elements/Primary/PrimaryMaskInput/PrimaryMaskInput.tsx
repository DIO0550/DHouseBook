import { InputHTMLAttributes, memo } from 'react';
import { PrimaryColorInput } from '@/components/Elements/PrimaryColorInput';
import { useInputMask } from './useInputMask';

type Props = InputHTMLAttributes<HTMLInputElement> & {
  mask: string | RegExp | Array<string | RegExp>;
  maskPlaceholder?: string;
};

const PrimaryMaskInput = memo<Props>((props) => {
  const {
    mask,
    maskPlaceholder,
    defaultValue: initialValue,
    ...inputProps
  } = props;

  const { onChange, onKeyDown, onBeforeInput, onSelect, onCut, defaultValue } =
    useInputMask({
      defaultValue: initialValue,
      mask,
      maskPlaceholder,
    });

  return (
    <PrimaryColorInput
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...inputProps}
      onBeforeInput={onBeforeInput}
      onKeyDown={onKeyDown}
      onChange={onChange}
      onSelect={onSelect}
      onCut={onCut}
      defaultValue={defaultValue}
    />
  );
});

export { PrimaryMaskInput };
