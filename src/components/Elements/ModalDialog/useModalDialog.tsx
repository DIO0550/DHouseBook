import { useEffect, useRef } from 'react';

type Props = {
  isOpen: boolean;
};

const useModalDialog = ({ isOpen }: Props) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    if (isOpen) {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [isOpen]);

  return {
    dialogRef,
  };
};

export { useModalDialog };
