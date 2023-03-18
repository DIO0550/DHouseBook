import { useEditor } from 'hooks/useEditor';
import React from 'react';
import { Slate, Editable } from 'slate-react';

const PurchaseItemEditor = React.memo(() => {
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
