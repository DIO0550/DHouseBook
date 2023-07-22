/* eslint-disable react/jsx-props-no-spreading */
import { Meta, StoryObj } from '@storybook/react';

import { PurchasedItemType } from './PurchasedItemType';

const meta: Meta<typeof PurchasedItemType> = {
  title: 'PurchasedItemType',
  component: PurchasedItemType,
  render: (args) => <PurchasedItemType {...args}>1,1000</PurchasedItemType>,
};

export default meta;

type Story = StoryObj<typeof PurchasedItemType>;

export const Default: Story = {};
