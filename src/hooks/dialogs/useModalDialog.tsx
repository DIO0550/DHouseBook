import {
  memo,
  ReactNode,
  RefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

import styles from './ModalDialog.module.scss';

type ComponentProps = {
  isOpen: boolean;
  onClose: () => void;
  dialogRef: RefObject<HTMLDialogElement>;
  children: ReactNode;
};

const DialogComponent = memo<ComponentProps>(
  ({ isOpen, onClose, dialogRef, children }) => (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
    <dialog
      className={`${styles['modal-dialog']}`}
      ref={dialogRef}
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
  ),
);

const useModalDialog = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const showDialog = useCallback(() => {
    setIsOpen(true);
  }, []);

  const closeDialog = useCallback(() => {
    setIsOpen(false);
  }, []);

  useEffect(() => {
    if (!dialogRef.current) {
      return;
    }
    if (isOpen) {
      if (dialogRef.current.open) {
        return;
      }

      dialogRef.current.showModal();
    } else {
      if (!dialogRef.current.open) {
        return;
      }

      dialogRef.current.close();
    }
  }, [isOpen]);

  const ModalDialog = useCallback(
    ({ children }: { children: ReactNode }) => (
      <DialogComponent
        dialogRef={dialogRef}
        isOpen={isOpen}
        onClose={closeDialog}
      >
        {children}
      </DialogComponent>
    ),
    [closeDialog, isOpen],
  );

  return {
    showDialog,
    closeDialog,
    ModalDialog,
  };
};

export { useModalDialog };
