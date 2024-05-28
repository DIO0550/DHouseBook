import { memo } from 'react';
import { HouseBookDate } from '@/features/files/utils/houseBookDate';
import { AddPurchasedItemButton } from '../AddPurchasedItemButton';
import styles from './HouseBookEditorNavigation.module.scss';
import { HouseBookEditorDate } from '../HouseBookEditorDate/HouseBookEditorDate';

type Props = {
  date: HouseBookDate | undefined;
  onAddItem: () => void;
  onChangeDate: (date: HouseBookDate) => void;
};

const HouseBookEditorNavigation = memo<Props>(
  ({ date, onAddItem, onChangeDate }) => (
    <nav className={`${styles.container}`}>
      <div className={`${styles['date-block']} ${styles['date-block-skin']}`}>
        <HouseBookEditorDate date={date} onChangeDate={onChangeDate} />
      </div>
      <div className={`${styles['operation-block']}`}>
        <AddPurchasedItemButton onClick={onAddItem} />
      </div>
    </nav>
  ),
);

export { HouseBookEditorNavigation };
