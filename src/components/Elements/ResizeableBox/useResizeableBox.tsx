import { useCallback, useRef, DragEvent } from 'react';

const DragStatus = {
  None: 'none',
  Dragging: 'dragging',
};

type DragStatus = (typeof DragStatus)[keyof typeof DragStatus];

const isLastEvent = (e: DragEvent) =>
  e.clientX === 0 && e.screenX === 0 && e.pageX === 0;

const useResizeableBox = <T extends HTMLElement>() => {
  const dragStatusRef = useRef<DragStatus>(DragStatus.None);
  const offset = useRef<number>(0);
  const boxRef = useRef<T>(null);
  const contetsRef = useRef<T>(null);
  const knobRef = useRef<T>(null);

  const handleDragStart = useCallback((e: DragEvent) => {
    e.stopPropagation();
    dragStatusRef.current = DragStatus.Dragging;
    console.log(e.clientX);
    if (!knobRef.current) {
      return;
    }
    const rects = knobRef.current.getBoundingClientRect();
    console.log(e.clientX);
    console.log(knobRef.current.getBoundingClientRect());
    offset.current = e.clientX - rects.x;
  }, []);

  const handleDrag = useCallback((e: DragEvent) => {
    e.stopPropagation();

    if (!contetsRef.current || !knobRef.current) {
      return;
    }

    if (isLastEvent(e)) {
      return;
    }

    // const contentsRect = contetsRef.current.getBoundingClientRect();
    // const knobReact = knobRef.current.getBoundingClientRect();
    // console.log('e.clientX: ', e.clientX);
    // console.log('e.screenX: ', e.screenX);
    // console.log('e.movementX: ', e.movementX);
    // console.log('e.pageX: ', e.pageX);

    contetsRef.current.style.width = `${e.clientX - offset.current * 10}px`;
  }, []);

  const handleDragEnd = useCallback((e: DragEvent) => {
    e.stopPropagation();
    dragStatusRef.current = DragStatus.None;
    console.log(knobRef.current?.style.left);
  }, []);

  return {
    handleDragStart,
    handleDrag,
    handleDragEnd,
    boxRef,
    contetsRef,
    knobRef,
  };
};

export { useResizeableBox };
