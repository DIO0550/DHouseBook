import { HouseBookFilterOperation } from '@/utils/filters/houseBookFilterOperation';
import { Option } from '@/components/Elements/PrimarySelect/useSelect';
import { UpdateFilter } from '@/features/filter/hooks/useHouseBookEditorFilter';
import { PrimarySelect } from '@/components/Elements/PrimarySelect/PrimarySelect';

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

  const options = Object.values(HouseBookFilterOperation).reduce((acc, cur) => {
    if (typeof cur !== 'string') {
      return acc;
    }

    const option: Option = {
      label: HouseBookFilterOperationLabel[cur as HouseBookFilterOperation],
      value: cur,
    };

    return [...acc, option];
  }, [] as Option[]);

  return (
    <PrimarySelect
      value={operation}
      options={options}
      onChange={(v) => {
        updateFilter(filterId, {
          type: 'Operation',
          value: v as HouseBookFilterOperation,
        });
      }}
    />
  );
};

export { HouseBookEditorFilterItemOperation };
