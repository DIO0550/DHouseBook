import { memo } from 'react';

type Props = {
  filterId: string;
  onClick: (id: string) => void;
};

const HouuseBookEditorFilterRemoveButton = memo<Props>(
  ({ filterId, onClick }) => (
    <button
      type="button"
      onClick={() => {
        onClick(filterId);
      }}
    >
      削除
    </button>
  ),
);

export { HouuseBookEditorFilterRemoveButton };
