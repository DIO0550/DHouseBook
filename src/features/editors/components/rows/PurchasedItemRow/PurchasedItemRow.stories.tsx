/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import { Meta, StoryObj } from '@storybook/react';
import { ThemeColor } from '@/providers/themes/components/ThemeProvider/ThemeColor';
import { ThemeProvider } from '@/components/Providers';
import { PurchasedItemRow } from './PurchasedItemRow';

const meta: Meta<typeof PurchasedItemRow> = {
  title: 'features/editors/components/rows/PurchasedItemRow',
  component: PurchasedItemRow,
  decorators: [
    (story) => (
      <ThemeProvider initialValue={ThemeColor.red}>{story()}</ThemeProvider>
    ),
  ],
  render: (args) => <PurchasedItemRow {...args} />,
};

export default meta;

type Story = StoryObj<typeof PurchasedItemRow>;

export const Default: Story = {
  args: {
    name: 'お菓子',
    price: '1000',
    date: '2020年1月1日',
    type: 'お菓子',
  },
};
