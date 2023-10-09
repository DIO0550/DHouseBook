import { useCallback, useRef, DragEvent } from 'react';

const DragStatus = {
  None: 'none',
  Dragging: 'dragging',
};

type DragStatus = (typeof DragStatus)[keyof typeof DragStatus];

const useResizeableBox = <T extends HTMLElement>() => {
  const dragStatusRef = useRef<DragStatus>(DragStatus.None);
  const boxRef = useRef<T>(null);

  const handleDragStart = useCallback((e: DragEvent) => {
    e.stopPropagation();
    dragStatusRef.current = DragStatus.Dragging;
  }, []);

  const handleDrag = useCallback(() => {
    if (!boxRef.current) {
      return;
    }

    const rect = boxRef.current.getBoundingClientRect();
  }, []);

  return {
    handleDragStart,
    handleDrag,
    boxRef,
  };
};

export { useResizeableBox };
