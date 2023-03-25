import { useMemo } from 'react';
import { createEditor } from 'slate';
import { withReact } from 'slate-react';

const useEditor = () => {
  const editor = useMemo(() => withReact(createEditor()), []);

  return { editor };
};

export { useEditor };
