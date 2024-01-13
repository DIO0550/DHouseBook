/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import { Meta, StoryObj } from '@storybook/react';

import { TestPurchasedItemData } from '@/tests/testPurchasedItem';
import { ThemeProvider, BookThemeColor } from '@/components/Providers';
import { PurchasedItemListHeader } from './PurchasedItemListHeader';

const meta: Meta<typeof PurchasedItemListHeader> = {
  component: PurchasedItemListHeader,
  render: () => <PurchasedItemListHeader />,
  decorators: [
    (story) => (
      <ThemeProvider initialValue={BookThemeColor.red}>{story()}</ThemeProvider>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof PurchasedItemListHeader>;

export const Default: Story = {
  args: {
    purchasedItems: TestPurchasedItemData,
  },
};
