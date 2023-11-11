import { ReactNode, memo } from 'react';
import { useThemeContext } from '@/components/Providers';
import { useResizeableBox, DragStatus } from './useResizeableBox';
import styles from './ResizeableBox.module.scss';

type Props = {
  children: ReactNode;
};

const ResizeableBox = memo<Props>(({ children }) => {
  const theme = useThemeContext();

  const { boxRef, contetsRef, knobRef, dragStatus } =
    useResizeableBox<HTMLDivElement>();

  return (
    <div ref={boxRef} className={`${styles['box-container']}`}>
      <div ref={contetsRef} className={`${styles.contents}`}>
        {children}
      </div>
      <div
        ref={knobRef}
        className={`${styles['box-knob']} ${styles['box-knob-skin']} ${
          dragStatus === DragStatus.Dragging
            ? styles['box-knob-dragging-skin']
            : ''
        } ${styles[theme]}`}
      />
    </div>
  );
});

export { ResizeableBox };
