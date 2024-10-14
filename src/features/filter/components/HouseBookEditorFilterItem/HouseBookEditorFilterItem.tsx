/* eslint-disable react/jsx-props-no-spreading */
import { HouseBookFilter } from '@/stores/atoms/houseBookFilterState';
import { memo } from 'react';
import { HouseBookItemCategory } from '@/utils/editors/houseBookItemCategory';
import {
  RemoveFilter,
  UpdateFilter,
} from '@/features/filter/hooks/useHouseBookEditorFilter';
import { HouseBookEditorFilterItemName } from '../HouseBookEditorFilterItemName/HouseBookEditorFilterItemName';
import { HouseBookEditorFilterItemDate } from '../HouseBookEditorFilterItemDate/HouseBookEditorFilterItemDate';
import { HouseBookEditorFilterItemPrice } from '../HouseBookEditorFilterItemPrice/HouseBookEditorFilterItemPrice';
import { HouseBookEditorFilterItemType } from '../HouseBookEditorFilterItemType/HouseBookEditorFilterItemType';
import styles from './HouseBookEditorFilterItem.module.scss';

type Props = {
  filter: HouseBookFilter;
  validate: boolean;
  updateFilter: UpdateFilter;
  removeFilter: RemoveFilter;
};
const ItemComponent = memo<Props>(
  ({ filter, validate, updateFilter, removeFilter }) => {
    switch (filter.category) {
      case HouseBookItemCategory.Name:
        return (
          <HouseBookEditorFilterItemName
            filterId={filter.id}
            filter={filter}
            validate={validate}
            updateFilter={updateFilter}
            removeFilter={removeFilter}
          />
        );

      case HouseBookItemCategory.Price:
        return (
          <HouseBookEditorFilterItemPrice
            filterId={filter.id}
            filter={filter}
            validate={validate}
            updateFilter={updateFilter}
            removeFilter={removeFilter}
          />
        );

      case HouseBookItemCategory.Type:
        return (
          <HouseBookEditorFilterItemType
            filterId={filter.id}
            filter={filter}
            validate={validate}
            updateFilter={updateFilter}
            removeFilter={removeFilter}
          />
        );

      case HouseBookItemCategory.Date:
        return (
          <HouseBookEditorFilterItemDate
            filterId={filter.id}
            filter={filter}
            validate={validate}
            updateFilter={updateFilter}
            removeFilter={removeFilter}
          />
        );

      default:
        return null;
    }
  },
);

const HouseBookEditorFilterItem = memo<Props>((props) => (
  <div className={`${styles.container} ${styles['container-skin']}`}>
    <ItemComponent {...props} />
  </div>
));

export { HouseBookEditorFilterItem };
