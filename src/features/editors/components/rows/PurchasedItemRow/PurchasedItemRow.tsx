import { memo } from 'react';
import { PurchasedItemName } from '@/features/editors/components/cells/PurchasedItemName';
import { PurchasedItemPrice } from '@/features/editors/components/cells/PurchasedItemPrice';
import { PurchasedItemType } from '@/features/editors/components/cells/PurchasedItemType';
import { PurchasedItemDate } from '@/features/editors/components/cells/PurchasedItemDate';
import { UpdateEntity } from '@/utils/editors/houseBookItemsEntity';
import { useThemeContext } from '@/providers/themes/hooks/useThemeContext';
import styles from './PurchasedItemRow.module.scss';

type Props = {
  id: string;
  name: string;
  price: string;
  type: string;
  date: string;
  onUpdateData: (updateEntity: UpdateEntity) => void;
};

const PurchasedItemRow = memo<Props>(
  ({ id, name, price, type, date, onUpdateData }) => {
    const { themeColor } = useThemeContext();

    return (
      <div
        className={`${styles.container} ${styles['container-skin']} ${styles[themeColor]}`}
      >
        <PurchasedItemName
          id={id}
          defaultValue={name}
          onUpdate={onUpdateData}
        />
        <PurchasedItemPrice
          id={id}
          defaultValue={price}
          onUpdate={onUpdateData}
        />
        <PurchasedItemType
          id={id}
          defaultValue={type}
          onUpdate={onUpdateData}
        />
        <PurchasedItemDate
          id={id}
          defaultValue={date}
          onUpdate={onUpdateData}
        />
      </div>
    );
  },
);

export { PurchasedItemRow };
