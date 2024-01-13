import { memo } from 'react';
import { PurchasedItemName } from '@/features/editors/components/cells/PurchasedItemName';
import { PurchasedItemPrice } from '@/features/editors/components/cells/PurchasedItemPrice';
import { PurchasedItemType } from '@/features/editors/components/cells/PurchasedItemType';
import { PurchasedItemDate } from '@/features/editors/components/cells/PurchasedItemDate';
import { UpdateEntity } from '@/utils/editors/houseBookItemsEntity';
import { useThemeContext } from '@/components/Providers';
import styles from './PurchasedItemRow.module.scss';

type Props = {
  id: string;
  name: string;
  price: string;
  type: string;
  date: string;
  handleUpdate: (updateEntity: UpdateEntity) => void;
};

const PurchasedItemRow = memo<Props>(
  ({ id, name, price, type, date, handleUpdate }) => {
    const theme = useThemeContext();

    return (
      <div
        className={`${styles.container} ${styles['container-skin']} ${styles[theme]}`}
      >
        <PurchasedItemName
          id={id}
          defaultValue={name}
          handleUpdate={handleUpdate}
        />
        <PurchasedItemPrice
          id={id}
          defaultValue={price}
          handleUpdate={handleUpdate}
        />
        <PurchasedItemType
          id={id}
          defaultValue={type}
          handleUpdate={handleUpdate}
        />
        <PurchasedItemDate
          id={id}
          defaultValue={date}
          handleUpdate={handleUpdate}
        />
      </div>
    );
  },
);

export { PurchasedItemRow };
