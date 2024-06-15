import { PrimaryColorInput } from '@/components/Elements/PrimaryColorInput';
import { UpdateEntity } from '@/utils/editors/houseBookItemsEntity';
import { memo } from 'react';
import styles from './PurchasedItemType.module.scss';

type Props = {
  id: string;
  defaultValue: string;
  onUpdate: (updateEntity: UpdateEntity) => void;
};

const PurchasedItemType = memo<Props>(({ id, defaultValue, onUpdate }) => (
  <div className={styles['type-container']}>
    <PrimaryColorInput
      defaultValue={defaultValue}
      onChange={(e) =>
        onUpdate({
          id,
          change: {
            type: e.currentTarget.value,
          },
        })
      }
    />
  </div>
));

export { PurchasedItemType };
