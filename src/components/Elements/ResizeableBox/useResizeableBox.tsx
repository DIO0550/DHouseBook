import { useCallback, useEffect, useRef, useState } from 'react';

export const DragStatus = {
  None: 'none',
  Dragging: 'dragging',
};

type DragStatus = (typeof DragStatus)[keyof typeof DragStatus];

const useResizeableBox = <T extends HTMLElement>() => {
  const [dragStatus, setDragStatus] = useState<DragStatus>(DragStatus.None);
  const offset = useRef<number>(0);
  const boxRef = useRef<T>(null);
  const contetsRef = useRef<T>(null);
  const knobRef = useRef<T>(null);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    e.stopPropagation();

    if (!contetsRef.current || !knobRef.current || !boxRef.current) {
      return;
    }

    const contentsRect = contetsRef.current.getBoundingClientRect();

    boxRef.current.style.width = `${
      e.screenX - contentsRect.x + offset.current
    }px`;
    contetsRef.current.style.width = `${
      e.screenX - contentsRect.x + offset.current
    }px`;
  }, []);

  const handleMouseUp = useCallback((e: MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setDragStatus(DragStatus.None);
  }, []);

  const handleMouseDown = useCallback((e: MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    if (!knobRef.current) {
      return;
    }

    const rect = knobRef.current.getBoundingClientRect();
    const shiftX = rect.right - e.screenX;
    offset.current = shiftX;
    setDragStatus(DragStatus.Dragging);
  }, []);

  useEffect(() => {
    if (dragStatus === DragStatus.Dragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [dragStatus, handleMouseMove, handleMouseUp]);

  useEffect(() => {
    const knob = knobRef.current;
    if (knob !== null) {
      knob.addEventListener('mousedown', handleMouseDown);
    }

    return () => {
      if (knob !== null) {
        knob.removeEventListener('mousedown', handleMouseDown);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    handleMouseDown,
    boxRef,
    contetsRef,
    knobRef,
    dragStatus,
  };
};

export { useResizeableBox };
