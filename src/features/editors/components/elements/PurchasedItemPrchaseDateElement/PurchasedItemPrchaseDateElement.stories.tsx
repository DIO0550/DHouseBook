/* eslint-disable react/jsx-props-no-spreading */
import { Meta, StoryObj } from '@storybook/react';

import { PurchasedItemPrchaseDateElement } from './PurchasedItemPrchaseDateElement';

const meta: Meta<typeof PurchasedItemPrchaseDateElement> = {
  title: 'PurchasedItemPrchaseDateElement',
  component: PurchasedItemPrchaseDateElement,
  render: (args) => (
    <PurchasedItemPrchaseDateElement {...args}>
      2022/12/13
    </PurchasedItemPrchaseDateElement>
  ),
};
export default meta;

type Story = StoryObj<typeof PurchasedItemPrchaseDateElement>;

export const Default: Story = {};
