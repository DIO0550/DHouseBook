import { PrimaryColorInput } from '@/components/Elements/PrimaryColorInput';
import { UpdateEntity } from '@/utils/editors/houseBookItemsEntity';
import { memo } from 'react';
import styles from './PurchasedItemDate.module.scss';

type Props = {
  id: string;
  defaultValue: string;
  handleUpdate: (updateEntity: UpdateEntity) => void;
};

const PurchasedItemDate = memo<Props>(({ id, defaultValue, handleUpdate }) => (
  <div className={styles['date-container']}>
    <PrimaryColorInput
      defaultValue={defaultValue}
      onChange={(e) => {
        handleUpdate({
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
