import { ContentState, EditorState } from 'draft-js';
import { useState } from 'react';

const useEditor = () => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createWithContent({
        ContentState.
    }),
  );

  return {
    editorState,
    setEditorState,
  };
};

export { useEditor };
