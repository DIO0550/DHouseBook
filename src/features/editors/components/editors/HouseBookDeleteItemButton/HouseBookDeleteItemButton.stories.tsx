/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from '@/components/Providers';
import { ThemeColor } from '@/providers/themes/components/ThemeProvider/ThemeColor';
import { fn } from '@storybook/test';
import { HouseBookDeleteItemButton } from './HouseBookDeleteItemButton';

const meta: Meta<typeof HouseBookDeleteItemButton> = {
  component: HouseBookDeleteItemButton,
  render: (args) => <HouseBookDeleteItemButton {...args} />,
  decorators: [
    (story) => (
      <ThemeProvider initialValue={ThemeColor.red}>{story()}</ThemeProvider>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof HouseBookDeleteItemButton>;

export const Default: Story = {
  args: {
    onClick: fn(),
  },
};
