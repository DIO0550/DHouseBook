import { useCallback, useMemo } from 'react';
import { createEditor } from 'slate';
import { RenderElementProps, RenderLeafProps, withReact } from 'slate-react';
import {
  RenderPurchasedItemElement,
  RenderPurchasedItemNameElement,
  RenderPurchasedItemPrchaseDateElement,
  RenderPurchasedItemPriceElement,
  RenderPurchasedItemTypeElement,
} from '../utils/editorElementRender';
import { PurchasedItemLeaf } from '@/features/editors/components/PurchasedItemLeaf';
import { PurchasedItem } from '@/utils/editors/purchasedItem';
import { PurchasedItemElement } from '@/utils/editors/purchasedItemElement';
import { PurchasedItemNameElement } from '@/utils/editors/purchasedItemNameElement';
import { PurchasedItemPriceElement } from '@/utils/editors/purchasedItemPriceElement';
import { PurchasedItemTypeElement } from '@/utils/editors/purchasedItemTypeElement';
import { PurchasedItemDateElement } from '@/utils/editors/purchasedItemDateElement';

type Props = {
  bookItems: PurchasedItem[] | undefined;
};

const useEditor = ({ bookItems }: Props) => {
  const editor = useMemo(() => withReact(createEditor()), []);

  const renderElement = useCallback(
    ({ attributes, children, element }: RenderElementProps) => {
      const { type } = element;
      switch (type) {
        case PurchasedItemElement.type:
          return (
            <RenderPurchasedItemElement
              attributes={attributes}
              element={element}
            >
              {children}
            </RenderPurchasedItemElement>
          );

        case PurchasedItemNameElement.type:
          return (
            <RenderPurchasedItemNameElement
              attributes={attributes}
              element={element}
            >
              {children}
            </RenderPurchasedItemNameElement>
          );

        case PurchasedItemPriceElement.type:
          return (
            <RenderPurchasedItemPriceElement
              attributes={attributes}
              element={element}
            >
              {children}
            </RenderPurchasedItemPriceElement>
          );

        case PurchasedItemTypeElement.type:
          return (
            <RenderPurchasedItemTypeElement
              attributes={attributes}
              element={element}
            >
              {children}
            </RenderPurchasedItemTypeElement>
          );

        case PurchasedItemDateElement.type:
          return (
            <RenderPurchasedItemPrchaseDateElement
              attributes={attributes}
              element={element}
            >
              {children}
            </RenderPurchasedItemPrchaseDateElement>
          );

        default:
          // eslint-disable-next-line react/jsx-props-no-spreading
          return <p {...attributes}>{children}</p>;
      }
    },
    [],
  );

  const renderLeaf = useCallback(
    ({ attributes, leaf, text, children }: RenderLeafProps) => (
      <PurchasedItemLeaf attributes={attributes} leaf={leaf} text={text}>
        {children}
      </PurchasedItemLeaf>
    ),
    [],
  );

  const decendanceValue = useMemo(() => {
    if (bookItems?.length) {
      return PurchasedItemElement.listFromPurchasedItems(bookItems);
    }
    const purchasedItem = PurchasedItem.init();

    return [PurchasedItemElement.fromPurchasedItem(purchasedItem)];
  }, [bookItems]);

  return { editor, renderElement, renderLeaf, decendanceValue };
};

export { useEditor };
