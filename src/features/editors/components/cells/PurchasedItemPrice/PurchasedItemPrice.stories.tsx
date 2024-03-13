/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import { Meta, StoryObj } from '@storybook/react';
import { ThemeColor } from '@/providers/themes/components/ThemeProvider/ThemeColor';
import { ThemeProvider } from '@/components/Providers';
import { PurchasedItemPrice } from './PurchasedItemPrice';

const meta: Meta<typeof PurchasedItemPrice> = {
  title: 'features/editors/components/cells/PurchasedItemPrice',
  component: PurchasedItemPrice,
  decorators: [
    (story) => (
      <ThemeProvider initialValue={ThemeColor.red}>{story()}</ThemeProvider>
    ),
  ],
  render: (args) => <PurchasedItemPrice {...args} />,
};

export default meta;

type Story = StoryObj<typeof PurchasedItemPrice>;

export const Default: Story = {
  args: {
    defaultValue: '1000',
  },
};
