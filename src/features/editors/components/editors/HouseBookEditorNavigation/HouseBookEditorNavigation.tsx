import { memo } from 'react';
import { AddPurchasedItemButton } from '../AddPurchasedItemButton';
import styles from './HouseBookEditorNavigation.module.scss';

type Props = {
  onAddItem: () => void;
};

const HouseBookEditorNavigation = memo<Props>(({ onAddItem }) => (
  <nav className={`${styles.container}`}>
    <div>date-block</div>
    <div className={`${styles['operation-block']}`}>
      <AddPurchasedItemButton onClick={onAddItem} />
    </div>
  </nav>
));

export { HouseBookEditorNavigation };
