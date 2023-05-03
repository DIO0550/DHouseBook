/* eslint-disable react/jsx-props-no-spreading */
import { Meta, StoryObj } from '@storybook/react';

import { PurchasedItemTypeElement } from './PurchasedItemTypeElement';

const meta: Meta<typeof PurchasedItemTypeElement> = {
  title: 'PurchasedItemTypeElement',
  component: PurchasedItemTypeElement,
  render: (args) => (
    <PurchasedItemTypeElement {...args}>日常品</PurchasedItemTypeElement>
  ),
};
export default meta;

type Story = StoryObj<typeof PurchasedItemTypeElement>;

export const Default: Story = {};
