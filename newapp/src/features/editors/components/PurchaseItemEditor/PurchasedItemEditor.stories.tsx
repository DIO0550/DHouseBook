/* eslint-disable react/jsx-props-no-spreading */
import { Meta, StoryObj } from '@storybook/react';

import { PurchasedItemEditor } from './PurchasedItemEditor';

const meta: Meta<typeof PurchasedItemEditor> = {
  title: 'PurchasedItemEditor',
  component: PurchasedItemEditor,
  render: (args) => <PurchasedItemEditor {...args} />,
};

export default meta;

type Story = StoryObj<typeof PurchasedItemEditor>;

export const Default: Story = {
  args: {
    houseBookData: undefined,
  },
};
