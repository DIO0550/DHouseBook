/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import { Meta, StoryObj } from '@storybook/react';

import { PurchasedItemPrice } from './PurchasedItemPrice';

const meta: Meta<typeof PurchasedItemPrice> = {
  title: 'PurchasedItemPrice',
  component: PurchasedItemPrice,
  render: (args) => <PurchasedItemPrice {...args} />,
};

export default meta;

type Story = StoryObj<typeof PurchasedItemPrice>;

export const Default: Story = {
  args: {
    defaultValue: '1000',
  },
};
