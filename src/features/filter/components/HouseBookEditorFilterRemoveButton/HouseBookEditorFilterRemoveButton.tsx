import { memo } from 'react';
import { useHouseBookEditorFilter } from '../../hooks/useHouseBookEditorFilter';

type Props = {
  filterId: string;
};

const HouuseBookEditorFilterRemoveButtonFilter = memo<Props>(({ filterId }) => {
  const { removeHouseBookFilterById } = useHouseBookEditorFilter();

  return (
    <button
      type="button"
      onClick={() => {
        removeHouseBookFilterById(filterId);
      }}
    >
      削除
    </button>
  );
});

export { HouuseBookEditorFilterRemoveButtonFilter };
