/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import { Meta, StoryObj } from '@storybook/react';

import { ThemeColor } from '@/providers/themes/components/ThemeProvider/ThemeColor';
import { TestPurchasedItemData } from '@/tests/testPurchasedItem';
import { ThemeProvider } from '@/components/Providers';
import { PurchasedItemListHeader } from './PurchasedItemListHeader';

const meta: Meta<typeof PurchasedItemListHeader> = {
  component: PurchasedItemListHeader,
  render: () => <PurchasedItemListHeader />,
  decorators: [
    (story) => (
      <ThemeProvider initialValue={ThemeColor.red}>{story()}</ThemeProvider>
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
