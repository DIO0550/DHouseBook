import { ReactNode, memo } from 'react';
import { useThemeContext } from '@/providers/themes/hooks/useThemeContext';
import { useResizeableBox, DragStatus } from './useResizeableBox';
import styles from './ResizeableBox.module.scss';

type Props = {
  knobSize?: number;
  children: ReactNode;
};

const ResizeableBox = memo<Props>(({ knobSize, children }) => {
  const { themeColor } = useThemeContext();

  const { boxRef, contetsRef, knobRef, dragStatus } =
    useResizeableBox<HTMLDivElement>();

  return (
    <div ref={boxRef} className={`${styles['box-container']}`}>
      <div ref={contetsRef} className={`${styles.contents}`}>
        {children}
      </div>
      <div
        ref={knobRef}
        style={{ width: knobSize ? `${knobSize}px` : '10px' }}
        className={`${styles['box-knob']} ${styles['box-knob-skin']} ${
          dragStatus === DragStatus.Dragging
            ? styles['box-knob-dragging-skin']
            : ''
        } ${styles[themeColor]}`}
      />
    </div>
  );
});

export { ResizeableBox };
