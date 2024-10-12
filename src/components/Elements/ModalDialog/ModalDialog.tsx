import { memo, ReactNode } from 'react';
import styles from './ModalDialog.module.scss';
import { useModalDialog } from './useModalDialog';

type Props = {
  isOpen: boolean;
  onClose: () => void;
} & React.HTMLAttributes<HTMLDialogElement>;

const ModalDialog = memo<Props>((props) => {
  const { isOpen, onClose, children, className, ...dialogProps } = props;
  const { dialogRef } = useModalDialog({ isOpen });

  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    <dialog
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...dialogProps}
      ref={dialogRef}
      className={`${styles['modal-dialog']} ${styles['modal-dialog-skin']} ${className}`}
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
