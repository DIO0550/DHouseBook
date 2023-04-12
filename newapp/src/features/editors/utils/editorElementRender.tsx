import { RenderElementProps } from 'slate-react';
import { memo } from 'react';
import { PurchasedItemElement } from '@/utils/editors/purchaseItemEditorConst';

const renderPurchasedItemElement = memo((props: RenderElementProps) => {
  <PurchasedItemElement></PurchasedItemElement>;
});
