import { memo } from 'react';
import { HouseBookDate } from '@/features/files/utils/houseBookDate';
import { HouseBookEditorFilter } from '@/features/filter/components/HouseBookEditorFilter';
import { HouseBookAddItemButton } from '../HouseBookAddItemButton';
import styles from './HouseBookEditorNavigation.module.scss';
import { HouseBookEditorDate } from '../HouseBookEditorDate/HouseBookEditorDate';

type Props = {
  date: HouseBookDate | undefined;
  onAddItem: () => void;
  onChangeDate: (date: HouseBookDate) => void;
};

const HouseBookEditorNavigation = memo<Props>(
  ({ date, onAddItem, onChangeDate }) => (
    <nav className={`${styles.container} ${styles['container-skin']}`}>
      <div className={`${styles['date-block']} ${styles['date-block-skin']}`}>
        <HouseBookEditorDate date={date} onChangeDate={onChangeDate} />
      </div>
      <div className={`${styles['operation-block']}`}>
        <HouseBookAddItemButton onClick={onAddItem} />
        <HouseBookEditorFilter />
      </div>
    </nav>
  ),
);

export { HouseBookEditorNavigation };
