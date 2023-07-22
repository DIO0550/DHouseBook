import { memo } from 'react';
import styles from './LocalSpinner.module.scss';

type Props = {
  isOpen?: boolean;
  isDisplayOverlay?: boolean;
};

const LocalSpinner = memo<Props>(
  ({ isOpen = false, isDisplayOverlay = false }) => {
    if (!isOpen) {
      return null;
    }

    return (
      <div className={isDisplayOverlay ? styles.overlay : ''}>
        <div className={styles.spinner} />
      </div>
    );
  },
);

export { LocalSpinner };
