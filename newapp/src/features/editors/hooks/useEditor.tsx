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
import { PurchaseItemEditorConst } from '@/utils/editors/purchaseItemEditorConst';
import { PurchasedItemLeaf } from '@/features/editors/components/PurchasedItemLeaf';

const useEditor = () => {
  const editor = useMemo(() => withReact(createEditor()), []);

  const renderElement = useCallback(
    ({ attributes, children, element }: RenderElementProps) => {
      const { type } = element;
      switch (type) {
        case PurchaseItemEditorConst.CustomElement.PucheseItem:
          return (
            <RenderPurchasedItemElement
              attributes={attributes}
              element={element}
            >
              {children}
            </RenderPurchasedItemElement>
          );

        case PurchaseItemEditorConst.CustomElement.Name:
          return (
            <RenderPurchasedItemNameElement
              attributes={attributes}
              element={element}
            >
              {children}
            </RenderPurchasedItemNameElement>
          );

        case PurchaseItemEditorConst.CustomElement.Price:
          return (
            <RenderPurchasedItemPriceElement
              attributes={attributes}
              element={element}
            >
              {children}
            </RenderPurchasedItemPriceElement>
          );

        case PurchaseItemEditorConst.CustomElement.Type:
          return (
            <RenderPurchasedItemTypeElement
              attributes={attributes}
              element={element}
            >
              {children}
            </RenderPurchasedItemTypeElement>
          );

        case PurchaseItemEditorConst.CustomElement.Date:
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

  return { editor, renderElement, renderLeaf };
};

export { useEditor };
