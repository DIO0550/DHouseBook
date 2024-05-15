import {
  ReactNode,
  RefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

type ComponentProps = {
  isOpen: boolean;
  dialogRef: RefObject<HTMLDialogElement>;
  children: ReactNode;
};

const DialogComponent = ({ isOpen, dialogRef, children }: ComponentProps) => (
  <dialog ref={dialogRef}>{isOpen && children}</dialog>
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

  const ModalDialog = ({ children }: { children: ReactNode }) => (
    <DialogComponent dialogRef={dialogRef} isOpen={isOpen}>
      {children}
    </DialogComponent>
  );

  return {
    showDialog,
    closeDialog,
    ModalDialog,
  };
};

export { useModalDialog };
