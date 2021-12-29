import { FC } from 'react';
import styles from './Loading.module.scss';

const Loading: FC = () => (
  <>
    <div className={styles['loading-overlay']}>
      <div className={styles.spinner} />
    </div>
  </>
);

export default Loading;
