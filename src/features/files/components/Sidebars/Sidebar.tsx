import { houseBookFileState } from '@/stores/atoms/houseBookFileState';
import { useRecoilValue } from 'recoil';
import { memo } from 'react';
import { HouseBookList } from '@/features/files/components/HouseBookList';
import styles from './Siderbar.module.scss';

const Sidebar = memo(() => {
  const files = useRecoilValue(houseBookFileState);

  return (
    <div className={styles.Sidebar}>
      <HouseBookList houseBookFiles={files} />
    </div>
  );
});

export { Sidebar };
