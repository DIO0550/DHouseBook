import { PrimaryColorInput } from '@/components/Elements/PrimaryColorInput';
import { memo } from 'react';

type Props = {
  defaultValue: string;
};

const PurchasedItemDate = memo<Props>(({ defaultValue }) => (
  <div>
    <PrimaryColorInput defaultValue={defaultValue} />
  </div>
));

export { PurchasedItemDate };
