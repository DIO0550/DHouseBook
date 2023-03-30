import { memo, MouseEvent } from 'react';
import { useThemeContext } from 'components/Providers';

type Props = {
  title: string;
  handleClick: (e?: MouseEvent) => void;
};

const PrimaryButton = memo<Props>(({ title, handleClick }) => {
  const a = useThemeContext();

  return (
  <button type="button" onClick={handleClick}>
    <div>{title}</div>
  </button>)
)};

export { PrimaryButton };
