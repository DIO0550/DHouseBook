import { useEditor } from 'hooks/useEditor';
import { memo } from 'react';
import { Slate, Editable } from 'slate-react';

const PurchaseItemEditor = memo(() => {
  const { editor } = useEditor();

  return (
    <div>
      <Slate value={[]} editor={editor}>
        <Editable />
      </Slate>
    </div>
  );
});

export { PurchaseItemEditor };
