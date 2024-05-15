/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from '@/components/Providers';
import { ThemeColor } from '@/providers/themes/components/ThemeProvider/ThemeColor';
import { fn } from '@storybook/test';
import { HouseBookEditorDate } from './HouseBookEditorDate';

const meta: Meta<typeof HouseBookEditorDate> = {
  component: HouseBookEditorDate,
  render: (args) => <HouseBookEditorDate {...args} />,
  decorators: [
    (story) => (
      <ThemeProvider initialValue={ThemeColor.red}>{story()}</ThemeProvider>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof HouseBookEditorDate>;

export const Default: Story = {
  args: {
    date: {
      year: 2020,
      month: 8,
    },
    onChangeDate: fn(),
  },
};
