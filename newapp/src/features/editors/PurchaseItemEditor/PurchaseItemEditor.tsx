import { memo } from 'react';
import { Slate, Editable } from 'slate-react';
import { useEditor } from '@/features/editors/hooks/useEditor';

const PurchaseItemEditor = memo(() => {
  const { editor } = useEditor();

  return (
    <div>
      <Slate value={[]} editor={editor}>
        <Editable renderElement={} />
      </Slate>
    </div>
  );
});

export { PurchaseItemEditor };
