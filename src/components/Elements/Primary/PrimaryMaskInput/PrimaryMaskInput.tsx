import { InputHTMLAttributes, memo } from 'react';
import { useInputMask } from './useInputMask';
import { PrimaryRoundInput } from '../PrimaryRoundInput/PrimaryRoundInput';

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

  const { onChange, onKeyDown, onBeforeInput, defaultValue } = useInputMask({
    defaultValue: initialValue,
    mask,
    maskPlaceholder,
  });

  return (
    <PrimaryRoundInput
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...inputProps}
      // value={value}
      onBeforeInput={onBeforeInput}
      onKeyDown={onKeyDown}
      onChange={onChange}
      defaultValue={defaultValue}
    />
  );
});

export { PrimaryMaskInput };
