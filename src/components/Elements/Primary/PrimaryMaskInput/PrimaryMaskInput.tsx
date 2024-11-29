import { InputHTMLAttributes, memo } from 'react';
import { useInputMask } from './useInputMask';
import { PrimaryRoundInput } from '../PrimaryRoundInput/PrimaryRoundInput';

type Props = InputHTMLAttributes<HTMLInputElement> & {
  mask: string | Array<string | RegExp>;
  maskPlaceholder?: string;
};

const PrimaryMaskInput = memo<Props>((props) => {
  const { mask, maskPlaceholder, ...inputProps } = props;
  const { onChange } = useInputMask({
    mask,
    maskPlaceholder,
  });

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <PrimaryRoundInput {...inputProps} onChange={onChange} />;
});

export default PrimaryMaskInput;
