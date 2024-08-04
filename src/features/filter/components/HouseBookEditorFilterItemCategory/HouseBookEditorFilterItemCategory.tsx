import { HouseBookItemCategory } from '@/utils/editors/houseBookItemCategory';
import { memo } from 'react';

type Props = {
  category: HouseBookItemCategory;
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
};

const HouseBookEditorFiterItemCategory = memo<Props>(
  ({ category, onChange = undefined }) => (
    <select value={category} onChange={onChange}>
      {Object.values(HouseBookItemCategory).map((v) => {
        if (typeof v !== 'string') {
          return null;
        }

        return (
          <option value={v}>{HouseBookItemCategory.displayName(v)}</option>
        );
      })}
    </select>
  ),
);

export { HouseBookEditorFiterItemCategory };
