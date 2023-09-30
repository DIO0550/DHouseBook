import { PrimaryColorInput } from '@/components/Elements/PrimaryColorInput';
import { UpdateEntity } from '@/utils/editors/houseBookItemsEntity';
import { memo } from 'react';

type Props = {
  id: string;
  defaultValue: string;
  handleUpdate: (updateEntity: UpdateEntity) => void;
};

const PurchasedItemType = memo<Props>(({ id, defaultValue, handleUpdate }) => (
  <div>
    <PrimaryColorInput
      defaultValue={defaultValue}
      onChange={(e) =>
        handleUpdate({
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
