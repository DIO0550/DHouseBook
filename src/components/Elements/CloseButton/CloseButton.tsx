import { MouseEventHandler } from 'react';

type Props = {
  // eslint-disable-next-line react/require-default-props
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const CloseButton = ({ onClick = undefined }: Props) => (
  <button type="button" aria-label="Close" onClick={onClick}>
    <div />
  </button>
);

export { CloseButton };
