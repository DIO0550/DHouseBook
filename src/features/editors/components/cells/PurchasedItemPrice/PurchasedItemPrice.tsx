import { UpdateEntity } from '@/utils/editors/houseBookItemsEntity';
import { memo } from 'react';
import { PrimaryMaskInput } from '@/components/Elements/Primary/PrimaryMaskInput/PrimaryMaskInput';
import styles from './PurchasedItemPrice.module.scss';

type Props = {
  id: string;
  defaultValue: string;
  onUpdate: (updateEntity: UpdateEntity) => void;
};

const PurchasedItemPrice = memo<Props>(({ id, defaultValue, onUpdate }) => (
  <div className={styles['price-container']}>
    <PrimaryMaskInput
      mask={/[0-9]/}
      className={`${styles.input}`}
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
