/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import { Meta, StoryObj } from '@storybook/react';

import { ThemeProvider } from '@/components/Providers';
import { ThemeColor } from '@/providers/themes/components/ThemeProvider/ThemeColor';
import {
  HouseBookFilterNameCondition,
  HouseBookFilterOperation,
  HouseBookFilterPriceCondition,
} from '@/stores/atoms/houseBookFilterState';
import { HouseBookItemCategory } from '@/utils/editors/houseBookItemCategory';
import { HouseBookEditorFilterList } from './HouseBookEditorFilterList';

const meta: Meta<typeof HouseBookEditorFilterList> = {
  component: HouseBookEditorFilterList,
  decorators: [
    (story) => (
      <ThemeProvider initialValue={ThemeColor.red}>{story()}</ThemeProvider>
    ),
  ],
  render: (args) => <HouseBookEditorFilterList {...args} />,
};

export default meta;

type Story = StoryObj<typeof HouseBookEditorFilterList>;

export const OperationNone: Story = {
  args: {
    filters: [
      {
        id: '1',
        category: HouseBookItemCategory.Name,
        value: 'House',
        condition: HouseBookFilterNameCondition.Include,
        operation: undefined,
      },
      {
        id: '2',
        category: HouseBookItemCategory.Price,
        value: 33,
        condition: HouseBookFilterPriceCondition.GreaterThan,
        operation: HouseBookFilterOperation.And,
      },
      {
        id: '3',
        category: HouseBookItemCategory.Type,
        value: 'House',
        condition: HouseBookFilterNameCondition.Include,
        operation: HouseBookFilterOperation.Or,
      },
      {
        id: '4',
        category: HouseBookItemCategory.Date,
        value: '20240701',
        condition: HouseBookFilterPriceCondition.GreaterThan,
        operation: HouseBookFilterOperation.And,
      },
    ],
  },
};
