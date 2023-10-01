import { memo } from 'react';
import { HouseBookList } from '@/features/files/components/HouseBookFileList';
import styles from './Siderbar.module.scss';

const Sidebar = memo(() => (
  <div
    className={`${styles['sidebar-container']} ${styles['sidebar-container-appearance']}`}
  >
    <HouseBookList />
  </div>
));

export { Sidebar };
