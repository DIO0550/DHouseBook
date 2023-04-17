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

const useEditor = () => {
  const editor = useMemo(() => withReact(createEditor()), []);

  const renderElement = useCallback((props: RenderElementProps) => {
    const { type } = props.element;
    switch (type) {
      case PurchaseItemEditorConst.CustomElement.PucheseItem:
        return (
          <RenderPurchasedItemElement
            attributes={props.attributes}
            element={props.element}
          >
            {props.children}
          </RenderPurchasedItemElement>
        );

      case PurchaseItemEditorConst.CustomElement.Name:
        return (
          <RenderPurchasedItemNameElement
            attributes={props.attributes}
            element={props.element}
          >
            {props.children}
          </RenderPurchasedItemNameElement>
        );

      case PurchaseItemEditorConst.CustomElement.Price:
        return (
          <RenderPurchasedItemPriceElement
            attributes={props.attributes}
            element={props.element}
          >
            {props.children}
          </RenderPurchasedItemPriceElement>
        );

      case PurchaseItemEditorConst.CustomElement.Type:
        return (
          <RenderPurchasedItemTypeElement
            attributes={props.attributes}
            element={props.element}
          >
            {props.children}
          </RenderPurchasedItemTypeElement>
        );

      case PurchaseItemEditorConst.CustomElement.Date:
        return (
          <RenderPurchasedItemPrchaseDateElement
            attributes={props.attributes}
            element={props.element}
          >
            {props.children}
          </RenderPurchasedItemPrchaseDateElement>
        );

      default:
        // eslint-disable-next-line react/jsx-props-no-spreading
        <div {...props.attributes}>{props.children}</div>;
    }
  }, []);

  const renderLeaf = useCallback((props: RenderLeafProps) => {});

  return { editor, renderElement, renderLeaf };
};

export { useEditor };
