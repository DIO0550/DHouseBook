/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from '@/components/Providers';
import { ThemeColor } from '@/providers/themes/components/ThemeProvider/ThemeColor';
import { fn } from '@storybook/test';
import { HouseBookDatePickerMonth } from './HouseBookDatePickerMonth';

const meta: Meta<typeof HouseBookDatePickerMonth> = {
  component: HouseBookDatePickerMonth,
  render: (args) => <HouseBookDatePickerMonth {...args} />,
  decorators: [
    (story) => (
      <ThemeProvider initialValue={ThemeColor.red}>{story()}</ThemeProvider>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof HouseBookDatePickerMonth>;

export const Default: Story = {
  args: {
    month: 8,
    isSelected: true,
    onClick: fn(),
  },
};
