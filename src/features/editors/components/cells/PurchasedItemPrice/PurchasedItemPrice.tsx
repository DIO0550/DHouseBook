import { PrimaryColorInput } from '@/components/Elements/PrimaryColorInput';
import { UpdateEntity } from '@/utils/editors/houseBookItemsEntity';
import { memo } from 'react';

type Props = {
  id: string;
  defaultValue: string;
  handleUpdate: (updateEntity: UpdateEntity) => void;
};

const PurchasedItemPrice = memo<Props>(({ id, defaultValue, handleUpdate }) => (
  <div>
    <PrimaryColorInput
      defaultValue={defaultValue}
      onChange={(e) =>
        handleUpdate({
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
