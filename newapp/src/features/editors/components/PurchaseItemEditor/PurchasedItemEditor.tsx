import { memo } from 'react';
import { Slate, Editable } from 'slate-react';
import { useEditor } from '@/features/editors/hooks/useEditor';
import { HouseBook } from '@/types/housebook';
// import styles from './PurchasedItemEditor.module.scss';

type Props = {
  houseBookData: HouseBook | undefined;
};

const PurchasedItemEditor = memo<Props>(({ houseBookData }) => {
  const { editor, renderElement, renderLeaf, decendanceValue } = useEditor({
    bookItems: houseBookData?.items,
  });

  return (
    <div>
      <Slate value={decendanceValue} editor={editor}>
        <Editable renderElement={renderElement} renderLeaf={renderLeaf} />
      </Slate>
    </div>
  );
});

export { PurchasedItemEditor };
