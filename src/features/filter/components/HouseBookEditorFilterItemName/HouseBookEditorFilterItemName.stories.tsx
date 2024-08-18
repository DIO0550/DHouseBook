/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import { Meta, StoryObj } from '@storybook/react';

import { ThemeProvider } from '@/components/Providers';
import { ThemeColor } from '@/providers/themes/components/ThemeProvider/ThemeColor';
import { HouseBookItemCategory } from '@/utils/editors/houseBookItemCategory';
import { HouseBookFilterNameCondition } from '@/utils/filters/houseBookFilterName';
import { HouseBookEditorFilterItemName } from './HouseBookEditorFilterItemName';

const meta: Meta<typeof HouseBookEditorFilterItemName> = {
  component: HouseBookEditorFilterItemName,
  decorators: [
    (story) => (
      <ThemeProvider initialValue={ThemeColor.red}>{story()}</ThemeProvider>
    ),
  ],
  render: (args) => <HouseBookEditorFilterItemName {...args} />,
};

export default meta;

type Story = StoryObj<typeof HouseBookEditorFilterItemName>;

export const OperationNone: Story = {
  args: {
    filter: {
      category: HouseBookItemCategory.Name,
      value: 'House',
      condition: HouseBookFilterNameCondition.Include,
      operation: undefined,
    },
  },
};

export const OperationAnd: Story = {
  args: {
    filter: {
      category: HouseBookItemCategory.Name,
      value: 'House',
      condition: HouseBookFilterNameCondition.Include,
      operation: undefined,
    },
  },
};

export const OperationOr: Story = {
  args: {
    filter: {
      category: HouseBookItemCategory.Name,
      value: 'House',
      condition: HouseBookFilterNameCondition.Include,
      operation: undefined,
    },
  },
};
