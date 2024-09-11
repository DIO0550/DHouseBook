import { HouseBookFilter } from '@/stores/atoms/houseBookFilterState';
import { memo } from 'react';
import { FilterInputValidate } from '@/features/filter/hooks/useFilterInputValidator';
import { HouseBookEditorFilterItem } from '../HouseBookEditorFilterItem/HouseBookEditorFilterItem';
import {
  RemoveFilter,
  UpdateFilter,
} from '../../hooks/useHouseBookEditorFilter';
import styles from './HouseBookEditorFilterList.module.scss';

type Props = {
  filters: HouseBookFilter[] | undefined;
  validates: FilterInputValidate[];
  updateFilter: UpdateFilter;
  removeFilter: RemoveFilter;
};

const HouseBookEditorFilterList = memo<Props>(
  ({
    filters = [] as HouseBookFilter[],
    validates = [] as FilterInputValidate[],
    updateFilter,
    removeFilter,
  }) => (
    <div className={`${styles.list}`}>
      {filters.map((v, i) => (
        <HouseBookEditorFilterItem
          key={v.id}
          filter={v}
          validate={validates[i].validate ?? true}
          updateFilter={updateFilter}
          removeFilter={removeFilter}
        />
      ))}
    </div>
  ),
);

export { HouseBookEditorFilterList };
