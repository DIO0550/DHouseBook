import { memo, ReactNode } from 'react';
import styles from './ModalDialog.module.scss';
import { useModalDialog } from './useModalDialog';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

const ModalDialog = memo<Props>(({ isOpen, onClose, children }) => {
  const { dialogRef } = useModalDialog({ isOpen });

  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    <dialog
      ref={dialogRef}
      className={`${styles['modal-dialog']} ${styles['modal-dialog-skin']}`}
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
  );
});

export { ModalDialog };
