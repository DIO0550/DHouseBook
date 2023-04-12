import { PurchaseItemEditorConst } from '@/utils/editors/purchaseItemEditorConst';
import { useCallback, useMemo } from 'react';
import { createEditor } from 'slate';
import { RenderElementProps, RenderLeafProps, withReact } from 'slate-react';

const useEditor = () => {
  const editor = useMemo(() => withReact(createEditor()), []);

  const renderElement = useCallback((props: RenderElementProps) => {
    const { type } = props.element;
    switch (type) {
      case PurchaseItemEditorConst.CustomElement.PucheseItem:
        return <div>{}</div>;
    }
  });

  const renderLeaf = useCallback((props: RenderLeafProps) => {});

  return { editor };
};

export { useEditor };
