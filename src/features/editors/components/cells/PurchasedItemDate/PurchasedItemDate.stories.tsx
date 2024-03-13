/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import { Meta, StoryObj } from '@storybook/react';
import { ThemeColor } from '@/providers/themes/components/ThemeProvider/ThemeColor';
import { ThemeProvider } from '@/components/Providers';
import { PurchasedItemDate } from './PurchasedItemDate';

const meta: Meta<typeof PurchasedItemDate> = {
  title: 'features/editors/components/cells/PurchasedItemDate',
  component: PurchasedItemDate,
  decorators: [
    (story) => (
      <ThemeProvider initialValue={ThemeColor.red}>{story()}</ThemeProvider>
    ),
  ],
  render: (args) => <PurchasedItemDate {...args} />,
};

export default meta;

type Story = StoryObj<typeof PurchasedItemDate>;

export const Default: Story = {
  args: {
    defaultValue: '1990年10月10日',
  },
};
