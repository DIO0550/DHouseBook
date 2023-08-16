import { PrimaryColorInput } from '@/components/Elements/PrimaryColorInput';
import { memo } from 'react';

type Props = {
  defaultValue: string;
};

const PurchasedItemType = memo<Props>(({ defaultValue }) => (
  <div>
    <PrimaryColorInput defaultValue={defaultValue} />
  </div>
));

export { PurchasedItemType };
