import { Editor } from 'draft-js';
import { useEditor } from 'hooks/useEditor';
import React from 'react';

const PurchaseItemEditor = React.memo(() => {
  const { editorState, setEditorState } = useEditor();

  return (
    <div>
      <Editor editorState={editorState} onChange={setEditorState} />
    </div>
  );
});

export { PurchaseItemEditor };
