import React from 'react';

type Props = {
  defaultValue: string;
};

const PurchasedItemType = React.memo<Props>(({ defaultValue = '' }) => (
  <div>
    <input type="text" defaultValue={defaultValue} />
  </div>
));

export { PurchasedItemType };
