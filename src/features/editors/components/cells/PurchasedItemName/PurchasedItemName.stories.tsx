/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import { Meta, StoryObj } from '@storybook/react';

import { ThemeProvider, BookThemeColor } from '@/components/Providers';
import { PurchasedItemName } from './PurchasedItemName';

const meta: Meta<typeof PurchasedItemName> = {
  title: 'features/editors/components/cells/PurchasedItemName',
  component: PurchasedItemName,
  decorators: [
    (story) => (
      <ThemeProvider initialValue={BookThemeColor.red}>{story()}</ThemeProvider>
    ),
  ],
  render: (args) => <PurchasedItemName {...args} />,
};

export default meta;

type Story = StoryObj<typeof PurchasedItemName>;

export const Default: Story = {
  args: {
    defaultValue: 'トッポ',
  },
};
