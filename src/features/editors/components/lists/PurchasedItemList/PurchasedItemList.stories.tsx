/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import { Meta, StoryObj } from '@storybook/react';

import { TestPurchasedItemData } from '@/tests/testPurchasedItem';
import { ThemeProvider, BookThemeColor } from '@/components/Providers';
import { PurchasedItemList } from './PurchasedItemList';

const meta: Meta<typeof PurchasedItemList> = {
  title: 'features/editors/components/lists/PurchasedItemList',
  component: PurchasedItemList,
  render: (args) => <PurchasedItemList {...args} />,
  decorators: [
    (story) => (
      <ThemeProvider initialValue={BookThemeColor.red}>{story()}</ThemeProvider>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof PurchasedItemList>;

export const Default: Story = {
  args: {
    purchasedItems: TestPurchasedItemData,
  },
};
