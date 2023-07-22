/* eslint-disable react/jsx-props-no-spreading */
import { Meta, StoryObj } from '@storybook/react';

import { PurchasedItemLeaf } from './PurchasedItemLeaf';

const meta: Meta<typeof PurchasedItemLeaf> = {
  title: 'PurchasedItemLeaf',
  component: PurchasedItemLeaf,
  render: (args) => <PurchasedItemLeaf {...args}>Leaf</PurchasedItemLeaf>,
};
export default meta;

type Story = StoryObj<typeof PurchasedItemLeaf>;

export const Default: Story = {};
