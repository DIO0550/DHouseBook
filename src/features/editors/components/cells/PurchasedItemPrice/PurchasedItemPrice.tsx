import { PrimaryColorInput } from '@/components/Elements/PrimaryColorInput';
import { UpdateEntity } from '@/utils/editors/houseBookItemsEntity';
import { memo } from 'react';
import styles from './PurchasedItemPrice.module.scss';

type Props = {
  id: string;
  defaultValue: string;
  onUpdate: (updateEntity: UpdateEntity) => void;
};

const PurchasedItemPrice = memo<Props>(({ id, defaultValue, onUpdate }) => (
  <div className={styles['price-container']}>
    <PrimaryColorInput
      defaultValue={defaultValue}
      onChange={(e) =>
        onUpdate({
          id,
          change: {
            price: Number(e.currentTarget.value),
          },
        })
      }
    />
  </div>
));

export { PurchasedItemPrice };
