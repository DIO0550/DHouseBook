import { UpdateEntity } from '@/utils/editors/houseBookItemsEntity';
import { memo } from 'react';
import { PrimaryMaskInput } from '@/components/Elements/Primary/PrimaryMaskInput/PrimaryMaskInput';
import styles from './PurchasedItemDate.module.scss';

type Props = {
  id: string;
  defaultValue: string;
  onUpdate: (updateEntity: UpdateEntity) => void;
};

const PurchasedItemDate = memo<Props>(({ id, defaultValue, onUpdate }) => (
  <div className={styles['date-container']}>
    <PrimaryMaskInput
      mask="99/99"
      maskPlaceholder="_"
      className={`${styles.input}`}
      defaultValue={defaultValue}
      onChange={(e) => {
        onUpdate({
          id,
          change: {
            date: e.currentTarget.value,
          },
        });
      }}
    />
  </div>
));

export { PurchasedItemDate };
