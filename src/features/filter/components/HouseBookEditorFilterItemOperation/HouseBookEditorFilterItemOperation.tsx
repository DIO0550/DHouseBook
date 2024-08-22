import { HouseBookFilterOperation } from '@/utils/filters/houseBookFilterOperation';
import { UpdateFilter } from '../../hooks/useHouseBookEditorFilter';

const HouseBookFilterOperationLabel: {
  [key in HouseBookFilterOperation]: string;
} = {
  [HouseBookFilterOperation.And]: 'かつ',
  [HouseBookFilterOperation.Or]: 'または',
};

type Props = {
  filterId: string;
  operation: HouseBookFilterOperation | undefined;
  updateFilter: UpdateFilter;
};
const HouseBookEditorFilterItemOperation = ({
  filterId,
  operation = undefined,
  updateFilter,
}: Props) => {
  if (!operation) {
    return null;
  }

  return (
    <select
      value={operation}
      onChange={(e) => {
        const newValue = e.currentTarget.value as HouseBookFilterOperation;
        updateFilter(filterId, {
          type: 'Operation',
          value: newValue,
        });
      }}
    >
      {Object.values(HouseBookFilterOperation).map((v) => (
        <option value={v}>{HouseBookFilterOperationLabel[v]}</option>
      ))}
    </select>
  );
};

export { HouseBookEditorFilterItemOperation };
