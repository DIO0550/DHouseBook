import { memo } from 'react';
import { Slate, Editable } from 'slate-react';
import { useEditor } from '@/features/editors/hooks/useEditor';
// import styles from './PurchasedItemEditor.module.scss';

const PurchasedItemEditor = memo(() => {
  const { editor, renderElement, renderLeaf } = useEditor();

  return (
    <div>
      <Slate value={[]} editor={editor}>
        <Editable renderElement={renderElement} renderLeaf={renderLeaf} />
      </Slate>
    </div>
  );
});

export { PurchasedItemEditor };
