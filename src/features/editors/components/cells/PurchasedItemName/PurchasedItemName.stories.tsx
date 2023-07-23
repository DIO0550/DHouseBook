/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import { Meta, StoryObj } from '@storybook/react';

import { PurchasedItemName } from './PurchasedItemName';

const meta: Meta<typeof PurchasedItemName> = {
  title: 'PurchasedItemName',
  component: PurchasedItemName,
  render: (args) => <PurchasedItemName {...args} />,
};

export default meta;

type Story = StoryObj<typeof PurchasedItemName>;

export const Default: Story = {
  args: {
    defaultValue: 'トッポ',
  },
};
