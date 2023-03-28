import { memo, MouseEvent } from 'react';

type Props = {
  title: string;
  handleClick: (e?: MouseEvent) => void;
};

const PrimaryButton = memo<Props>(({ title, handleClick }) => (
  <button type="button" onClick={handleClick}>
    <div>{title}</div>
  </button>
));

export { PrimaryButton };
