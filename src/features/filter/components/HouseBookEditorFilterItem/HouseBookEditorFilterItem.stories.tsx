/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import { Meta, StoryObj } from '@storybook/react';

import { ThemeProvider } from '@/components/Providers';
import { ThemeColor } from '@/providers/themes/components/ThemeProvider/ThemeColor';
import {
  HouseBookFilterCategory,
  HouseBookFilterNameCondition,
} from '@/stores/atoms/houseBookFilterState';
import { HouseBookEditorFilterItem } from './HouseBookEditorFilterItem';

const meta: Meta<typeof HouseBookEditorFilterItem> = {
  component: HouseBookEditorFilterItem,
  decorators: [
    (story) => (
      <ThemeProvider initialValue={ThemeColor.red}>{story()}</ThemeProvider>
    ),
  ],
  render: (args) => <HouseBookEditorFilterItem {...args} />,
};

export default meta;

type Story = StoryObj<typeof HouseBookEditorFilterItem>;

export const Filter: Story = {
  args: {
    filter: {
      type: HouseBookFilterCategory.Name,
      value: 'House',
      condition: HouseBookFilterNameCondition.Include,
      operation: undefined,
    },
  },
};
