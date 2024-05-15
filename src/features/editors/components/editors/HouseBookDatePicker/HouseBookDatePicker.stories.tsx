/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from '@/components/Providers';
import { ThemeColor } from '@/providers/themes/components/ThemeProvider/ThemeColor';
import { HouseBookDatePicker } from './HouseBookDatePicker';

const meta: Meta<typeof HouseBookDatePicker> = {
  component: HouseBookDatePicker,
  render: (args) => <HouseBookDatePicker {...args} />,
  decorators: [
    (story) => (
      <ThemeProvider initialValue={ThemeColor.red}>{story()}</ThemeProvider>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof HouseBookDatePicker>;

export const Default: Story = {
  args: {
    initialYear: 2024,
  },
};
