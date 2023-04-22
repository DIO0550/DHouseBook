/* eslint-disable react/jsx-props-no-spreading */
import { Meta, StoryObj } from '@storybook/react';

import { PurchasedItemPriceElement } from './PurchasedItemPriceElement';

const meta: Meta<typeof PurchasedItemPriceElement> = {
  title: 'PurchasedItemPriceElement',
  component: PurchasedItemPriceElement,
  render: (args) => (
    <PurchasedItemPriceElement {...args}>1,1000</PurchasedItemPriceElement>
  ),
};

export default meta;

type Story = StoryObj<typeof PurchasedItemPriceElement>;

export const Default: Story = {};
