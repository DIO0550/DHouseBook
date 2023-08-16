/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import { Meta, StoryObj } from '@storybook/react';

import { ThemeProvider, BookThemeColor } from '@/components/Providers';
import { PurchasedItemType } from './PurchasedItemType';

const meta: Meta<typeof PurchasedItemType> = {
  title: 'features/editors/components/cells/PurchasedItemType',
  component: PurchasedItemType,
  decorators: [
    (story) => (
      <ThemeProvider initialValue={BookThemeColor.red}>{story()}</ThemeProvider>
    ),
  ],
  render: (args) => <PurchasedItemType {...args} />,
};

export default meta;

type Story = StoryObj<typeof PurchasedItemType>;

export const Default: Story = {
  args: {
    defaultValue: 'お菓子',
  },
};
