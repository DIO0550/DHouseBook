import { memo } from 'react';

type Props = {
  defaultValue: string;
};

const PurchasedItemName = memo<Props>(({ defaultValue }) => (
  <div>
    <input defaultValue={defaultValue} />
  </div>
));

export { PurchasedItemName };
