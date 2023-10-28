import { ReactNode, memo } from 'react';
import { useResizeableBox } from './useResizeableBox';
import styles from './ResizeableBox.module.scss';

type Props = {
  children: ReactNode;
};

const ResizeableBox = memo<Props>(({ children }) => {
  const { boxRef, contetsRef, knobRef } = useResizeableBox<HTMLDivElement>();

  return (
    <div ref={boxRef} className={`${styles['box-container']}`}>
      <div ref={contetsRef} className={`${styles.contents}`}>
        {children}
      </div>
      <div
        ref={knobRef}
        className={`${styles['box-knob']} ${styles['box-knob-skin']}`}
      />
    </div>
  );
});

export { ResizeableBox };
