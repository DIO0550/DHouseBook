import { useEditor } from 'features/editors/hooks/useEditor';
import { memo } from 'react';
import { Slate, Editable } from 'slate-react';

const PurchasedItemEditor = memo(() => {
  const { editor } = useEditor();

  return (
    <div>
      <Slate value={[]} editor={editor}>
        <Editable />
      </Slate>
    </div>
  );
});

export { PurchasedItemEditor };
