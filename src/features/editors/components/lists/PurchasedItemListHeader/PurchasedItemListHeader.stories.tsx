/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import { Meta, StoryObj } from '@storybook/react';

import { ThemeColor } from '@/providers/themes/components/ThemeProvider/ThemeColor';
import { ThemeProvider } from '@/components/Providers';
import { HouseBookEditorMode } from '@/features/editors/hooks/useHouseBookEditorMode';
import { PurchasedItemListHeader } from './PurchasedItemListHeader';

const meta: Meta<typeof PurchasedItemListHeader> = {
  component: PurchasedItemListHeader,
  render: (args) => <PurchasedItemListHeader {...args} />,
  decorators: [
    (story) => (
      <ThemeProvider initialValue={ThemeColor.red}>{story()}</ThemeProvider>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof PurchasedItemListHeader>;

export const Normal: Story = {
  args: {
    mode: HouseBookEditorMode.Normal,
  },
};

export const Select: Story = {
  args: {
    mode: HouseBookEditorMode.Select,
  },
};
