import { memo } from 'react';

type Props = {
  defaultValue: string;
};

const PurchasedItemType = memo<Props>(({ defaultValue }) => (
  <div>
    <input defaultValue={defaultValue} />
  </div>
));

export { PurchasedItemType };
