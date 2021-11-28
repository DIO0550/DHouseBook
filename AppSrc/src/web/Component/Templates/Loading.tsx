import { FC } from 'react';
import styles from './Loading.module.scss';

const Loading: FC = () => {
  return (
    <>
      <div className={styles['loading-overlay']}>
        <div className={styles['spinner']} />
      </div>
    </>
  );
};

export default Loading;
