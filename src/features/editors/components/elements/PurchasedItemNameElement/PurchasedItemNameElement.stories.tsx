/* eslint-disable react/jsx-props-no-spreading */
import { Meta, StoryObj } from '@storybook/react';

import { PurchasedItemNameElement } from './PurchasedItemNameElement';

const meta: Meta<typeof PurchasedItemNameElement> = {
  title: 'PurchasedItemNameElement',
  component: PurchasedItemNameElement,
  render: (args) => (
    <PurchasedItemNameElement {...args}>名前</PurchasedItemNameElement>
  ),
};

export default meta;

type Story = StoryObj<typeof PurchasedItemNameElement>;

export const Default: Story = {};
