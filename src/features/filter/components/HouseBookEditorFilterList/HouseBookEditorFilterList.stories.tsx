/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import { Meta, StoryObj } from '@storybook/react';

import { ThemeProvider } from '@/components/Providers';
import { ThemeColor } from '@/providers/themes/components/ThemeProvider/ThemeColor';
import {
  HouseBookFilterCategory,
  HouseBookFilterNameCondition,
  HouseBookFilterOperation,
  HouseBookFilterPriceCondition,
} from '@/stores/atoms/houseBookFilterState';
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
        category: HouseBookFilterCategory.Name,
        value: 'House',
        condition: HouseBookFilterNameCondition.Include,
        operation: undefined,
      },
      {
        category: HouseBookFilterCategory.Price,
        value: 33,
        condition: HouseBookFilterPriceCondition.GreaterThan,
        operation: HouseBookFilterOperation.And,
      },
      {
        category: HouseBookFilterCategory.Type,
        value: 'House',
        condition: HouseBookFilterNameCondition.Include,
        operation: HouseBookFilterOperation.Or,
      },
      {
        category: HouseBookFilterCategory.PurchaseDate,
        value: '20240701',
        condition: HouseBookFilterPriceCondition.GreaterThan,
        operation: HouseBookFilterOperation.And,
      },
    ],
  },
};
