import { memo, MouseEvent } from 'react';

type Props = {
  title: string;
  handleClick: (e?: MouseEvent) => void;
};

const SecondaryButton = memo<Props>(({ title, handleClick }) => (
  <button type="button" onClick={handleClick}>
    <div>{title}</div>
  </button>
));

export { SecondaryButton };
