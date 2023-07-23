import { memo } from 'react';

type Props = {
  defaultValue: string;
};

const PurchasedItemDate = memo<Props>(({ defaultValue }) => (
  <div>
    <input defaultValue={defaultValue} />
  </div>
));

export { PurchasedItemDate };
