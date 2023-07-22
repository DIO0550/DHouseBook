/* eslint-disable react/jsx-props-no-spreading */
import { RenderElementProps } from 'slate-react';
import { memo } from 'react';
import {
  PurchasedItemElement,
  PurchasedItemNameElement,
  PurchasedItemPrchaseDateElement,
  PurchasedItemPriceElement,
  PurchasedItemTypeElement,
} from '@/features/editors/components/elements/';

const RenderPurchasedItemElement = memo<RenderElementProps>(
  ({ children, attributes, element }) => {
    const selected = true;

    return (
      <PurchasedItemElement
        attributes={attributes}
        element={element}
        selected={selected}
      >
        {children}
      </PurchasedItemElement>
    );
  },
);

const RenderPurchasedItemNameElement = memo<RenderElementProps>(
  ({ children, attributes, element }) => (
    <PurchasedItemNameElement attributes={attributes} element={element}>
      {children}
    </PurchasedItemNameElement>
  ),
);

const RenderPurchasedItemPriceElement = memo<RenderElementProps>(
  ({ children, attributes, element }) => (
    <PurchasedItemPriceElement attributes={attributes} element={element}>
      {children}
    </PurchasedItemPriceElement>
  ),
);

const RenderPurchasedItemTypeElement = memo<RenderElementProps>(
  ({ children, attributes, element }) => (
    <PurchasedItemTypeElement attributes={attributes} element={element}>
      {children}
    </PurchasedItemTypeElement>
  ),
);

const RenderPurchasedItemPrchaseDateElement = memo<RenderElementProps>(
  ({ children, attributes, element }) => (
    <PurchasedItemPrchaseDateElement attributes={attributes} element={element}>
      {children}
    </PurchasedItemPrchaseDateElement>
  ),
);

export {
  RenderPurchasedItemElement,
  RenderPurchasedItemNameElement,
  RenderPurchasedItemPriceElement,
  RenderPurchasedItemTypeElement,
  RenderPurchasedItemPrchaseDateElement,
};
