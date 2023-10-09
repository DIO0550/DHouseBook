import { ReactNode, memo } from 'react';
import { useResizeableBox } from './useResizeableBox';
import styles from './ResizeableBox.module.scss';

type Props = {
  children: ReactNode;
};

const ResizeableBox = memo<Props>(({ children }) => {
  const { boxRef, handleDragStart } = useResizeableBox<HTMLDivElement>();

  return (
    <div
      className={`${styles['box-container']}`}
      ref={boxRef}
      onDragStart={handleDragStart}
    >
      <div>{children}</div>
      <div className={`${styles['box-knob']} ${styles['box-knob-skin']}`} />
    </div>
  );
});

export { ResizeableBox };
