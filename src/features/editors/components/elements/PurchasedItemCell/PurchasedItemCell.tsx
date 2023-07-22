import React from 'react';
import { PurchasedItem } from '@/utils/editors/purchasedItem';
import { PurchasedItemType } from '../PurchasedItemType/PurchasedItemType';

type Props = {
  item: PurchasedItem;
};

const PurchasedItemCell = React.memo<Props>(({ item }) => (
  <div>
    <PurchasedItemType defaultValue={item.type} />
  </div>
));

export { PurchasedItemCell };
