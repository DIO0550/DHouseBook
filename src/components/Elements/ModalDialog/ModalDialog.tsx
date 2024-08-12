import { memo, ReactNode } from 'react';
import styles from './ModalDialog.module.scss';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

const ModalDialog = memo<Props>(({ isOpen, onClose, children }) => (
  // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
  <dialog
    className={`${styles['modal-dialog']}`}
    onClick={onClose}
    onKeyDown={(e) => {
      if (e.code !== 'Escape') {
        return;
      }
      e.preventDefault();
      onClose();
    }}
  >
    <button
      className={`${styles.content}`}
      type="button"
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      {isOpen && children}
    </button>
  </dialog>
));

export { ModalDialog };
