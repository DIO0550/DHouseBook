import { memo } from 'react';
import { HouseBookList } from '@/features/files/components/HouseBookFileList';
import { ResizeableBox } from '@/components/Elements/ResizeableBox/ResizeableBox';
import styles from './Siderbar.module.scss';

const Sidebar = memo(() => (
  <ResizeableBox>
    <div
      className={`${styles['sidebar-contents']} ${styles['sidebar-contents-appearance']}`}
    >
      <HouseBookList />
    </div>
  </ResizeableBox>
));

export { Sidebar };
