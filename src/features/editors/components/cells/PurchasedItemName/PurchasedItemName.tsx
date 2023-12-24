import { PrimaryColorInput } from '@/components/Elements/PrimaryColorInput';
import { UpdateEntity } from '@/utils/editors/houseBookItemsEntity';
import { memo } from 'react';
import styles from './PurchasedItemName.module.scss';

type Props = {
  id: string;
  defaultValue: string;
  handleUpdate: (updateEntity: UpdateEntity) => void;
};

const PurchasedItemName = memo<Props>(({ id, defaultValue, handleUpdate }) => (
  <div className={styles['name-container']}>
    <PrimaryColorInput
      defaultValue={defaultValue}
      onChange={(e) => {
        handleUpdate({
          id,
          change: {
            name: e.currentTarget.value,
          },
        });
      }}
    />
  </div>
));

export { PurchasedItemName };
