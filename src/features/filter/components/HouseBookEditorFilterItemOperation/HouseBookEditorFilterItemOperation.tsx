import { HouseBookFilterOperation } from '@/stores/atoms/houseBookFilterState';

const HouseBookFilterOperationLabel: {
  [key in HouseBookFilterOperation]: string;
} = {
  [HouseBookFilterOperation.And]: 'かつ',
  [HouseBookFilterOperation.Or]: 'または',
};

type Props = {
  operation: HouseBookFilterOperation | undefined;
};
const HouseBookEditorFilterItemOperation = ({
  operation = undefined,
}: Props) => {
  if (!operation) {
    return null;
  }

  return (
    <select defaultValue={operation}>
      {Object.values(HouseBookFilterOperation).map((v) => (
        <option value={v}>{HouseBookFilterOperationLabel[v]}</option>
      ))}
    </select>
  );
};

export { HouseBookEditorFilterItemOperation };
