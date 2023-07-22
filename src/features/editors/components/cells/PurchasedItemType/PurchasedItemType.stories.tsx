/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import { Meta, StoryObj } from '@storybook/react';

import { PurchasedItemType } from './PurchasedItemType';

const meta: Meta<typeof PurchasedItemType> = {
  title: 'PurchasedItemType',
  component: PurchasedItemType,
  render: (args) => <PurchasedItemType {...args} />,
};

export default meta;

type Story = StoryObj<typeof PurchasedItemType>;

export const Default: Story = {
  args: {
    defaultValue: 'お菓子',
  },
};
