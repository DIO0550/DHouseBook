import { memo } from 'react';
import { HouseBookDate } from '@/features/files/utils/houseBookDate';
import { HouseBookEditorFilter } from '@/features/filter/components/HouseBookEditorFilter';
import { HouseBookEditorMode } from '@/features/editors/hooks/useHouseBookEditorMode';
import { HouseBookAddItemButton } from '../HouseBookAddItemButton';
import styles from './HouseBookEditorNavigation.module.scss';
import { HouseBookEditorDate } from '../HouseBookEditorDate/HouseBookEditorDate';
import { HouseBookEditButton } from '../HouseBookEditButton';
import { HouseBookDeleteItemButton } from '../HouseBookDeleteItemButton/HouseBookDeleteItemButton';

type Props = {
  date: HouseBookDate | undefined;
  mode: HouseBookEditorMode;
  onChangeMode: (mode: HouseBookEditorMode) => void;
  onAddItem: () => void;
  onChangeDate: (date: HouseBookDate) => void;
  onDeleteItem: () => void;
};

const HouseBookEditorNavigation = memo<Props>(
  ({ date, onAddItem, onChangeDate, onDeleteItem, mode, onChangeMode }) => (
    <nav className={`${styles.container} ${styles['container-skin']}`}>
      <div className={`${styles['date-block']} ${styles['date-block-skin']}`}>
        <HouseBookEditorDate date={date} onChangeDate={onChangeDate} />
      </div>
      <div className={`${styles['operation-block']}`}>
        <HouseBookDeleteItemButton onClick={onDeleteItem} />
        <HouseBookAddItemButton onClick={onAddItem} />
        <HouseBookEditButton
          onClick={() => {
            switch (mode) {
              case HouseBookEditorMode.Select:
                onChangeMode(HouseBookEditorMode.Normal);

                return;
              default:
                onChangeMode(HouseBookEditorMode.Select);
            }
          }}
        />
        <HouseBookEditorFilter />
      </div>
    </nav>
  ),
);

export { HouseBookEditorNavigation };
