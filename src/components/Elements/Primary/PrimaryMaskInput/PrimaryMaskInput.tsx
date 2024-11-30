import { InputHTMLAttributes, memo } from 'react';
import { useInputMask } from './useInputMask';
import { PrimaryRoundInput } from '../PrimaryRoundInput/PrimaryRoundInput';

type Props = InputHTMLAttributes<HTMLInputElement> & {
  mask: string | Array<string | RegExp>;
  maskPlaceholder?: string;
};

const PrimaryMaskInput = memo<Props>((props) => {
  const {
    mask,
    maskPlaceholder,
    defaultValue: initialValue,
    ...inputProps
  } = props;

  const { onChange, defaultValue } = useInputMask({
    defaultValue: initialValue,
    mask,
    maskPlaceholder,
  });

  return (
    <PrimaryRoundInput
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...inputProps}
      onChange={onChange}
      defaultValue={defaultValue}
    />
  );
});

export { PrimaryMaskInput };
