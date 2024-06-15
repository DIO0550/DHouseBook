import { PrimaryColorInput } from '@/components/Elements/PrimaryColorInput';
import { UpdateEntity } from '@/utils/editors/houseBookItemsEntity';
import { memo } from 'react';
import styles from './PurchasedItemName.module.scss';

type Props = {
  id: string;
  defaultValue: string;
  onUpdate: (updateEntity: UpdateEntity) => void;
};

const PurchasedItemName = memo<Props>(({ id, defaultValue, onUpdate }) => (
  <div className={styles['name-container']}>
    <PrimaryColorInput
      defaultValue={defaultValue}
      onChange={(e) => {
        onUpdate({
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
