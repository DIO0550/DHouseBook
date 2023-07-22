/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import { Meta, StoryObj } from '@storybook/react';

import { PurchasedItemElement } from './PurchasedItemElement';
import { PurchasedItemNameElement } from '../PurchasedItemNameElement/PurchasedItemNameElement';

const meta: Meta<typeof PurchasedItemElement> = {
  title: 'PurchasedItemElement',
  component: PurchasedItemElement,
  render: (args) => (
    <PurchasedItemElement {...args}>
      <PurchasedItemNameElement
        attributes={args.attributes}
        element={args.element}
      >
        名前
      </PurchasedItemNameElement>
    </PurchasedItemElement>
  ),
};

export default meta;

type Story = StoryObj<typeof PurchasedItemElement>;

export const Default: Story = {};
