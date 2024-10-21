/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import { Meta, StoryObj } from '@storybook/react';
import { ThemeColor } from '@/providers/themes/components/ThemeProvider/ThemeColor';
import { ThemeProvider } from '@/components/Providers';
import { fn } from '@storybook/test';
import { PurchasedItemSelect } from './PurchasedItemSelect';

const meta: Meta<typeof PurchasedItemSelect> = {
  title: 'features/editors/components/cells/PurchasedItemSelect',
  component: PurchasedItemSelect,
  decorators: [
    (story) => (
      <ThemeProvider initialValue={ThemeColor.red}>{story()}</ThemeProvider>
    ),
  ],
  render: (args) => <PurchasedItemSelect {...args} />,
};

export default meta;

type Story = StoryObj<typeof PurchasedItemSelect>;

export const Checked: Story = {
  args: {
    id: 'id',
    checked: true,
    onChange: fn(),
  },
};

export const NotChecked: Story = {
  args: {
    id: 'id',
    checked: false,
    onChange: fn(),
  },
};
