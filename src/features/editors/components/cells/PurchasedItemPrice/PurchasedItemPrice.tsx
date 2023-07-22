import { memo } from 'react';

type Props = {
  defaultValue: string;
};

const PurchasedItemPrice = memo<Props>(({ defaultValue }) => (
  <div>
    <input defaultValue={defaultValue} />
  </div>
));

export { PurchasedItemPrice };
