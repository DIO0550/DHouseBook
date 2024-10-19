/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from '@/components/Providers';
import { ThemeColor } from '@/providers/themes/components/ThemeProvider/ThemeColor';
import { fn } from '@storybook/test';
import { HouseBookEditButton } from './HouseBookEditButton';

const meta: Meta<typeof HouseBookEditButton> = {
  component: HouseBookEditButton,
  decorators: [
    (story) => (
      <ThemeProvider initialValue={ThemeColor.red}>{story()}</ThemeProvider>
    ),
  ],
  render: (args) => <HouseBookEditButton {...args} />,
};

export default meta;

type Story = StoryObj<typeof HouseBookEditButton>;

export const Red: Story = {
  decorators: [
    (story) => (
      <ThemeProvider initialValue={ThemeColor.red}>{story()}</ThemeProvider>
    ),
  ],
  args: {
    onClick: fn(),
  },
};

export const Purple: Story = {
  decorators: [
    (story) => (
      <ThemeProvider initialValue={ThemeColor.purple}>{story()}</ThemeProvider>
    ),
  ],
  args: {
    onClick: fn(),
  },
};

export const Blue: Story = {
  decorators: [
    (story) => (
      <ThemeProvider initialValue={ThemeColor.blue}>{story()}</ThemeProvider>
    ),
  ],
  args: {
    onClick: fn(),
  },
};

export const Cyan: Story = {
  decorators: [
    (story) => (
      <ThemeProvider initialValue={ThemeColor.cyan}>{story()}</ThemeProvider>
    ),
  ],
  args: {
    onClick: fn(),
  },
};

export const Green: Story = {
  decorators: [
    (story) => (
      <ThemeProvider initialValue={ThemeColor.green}>{story()}</ThemeProvider>
    ),
  ],
  args: {
    onClick: fn(),
  },
};

export const Yellow: Story = {
  decorators: [
    (story) => (
      <ThemeProvider initialValue={ThemeColor.yellow}>{story()}</ThemeProvider>
    ),
  ],
  args: {
    onClick: fn(),
  },
};

export const Orange: Story = {
  decorators: [
    (story) => (
      <ThemeProvider initialValue={ThemeColor.orange}>{story()}</ThemeProvider>
    ),
  ],
  args: {
    onClick: fn(),
  },
};

export const Gray: Story = {
  decorators: [
    (story) => (
      <ThemeProvider initialValue={ThemeColor.gray}>{story()}</ThemeProvider>
    ),
  ],
  args: {
    onClick: fn(),
  },
};

export const Disabled: Story = {
  decorators: [
    (story) => (
      <ThemeProvider initialValue={ThemeColor.red}>{story()}</ThemeProvider>
    ),
  ],
  args: {
    onClick: fn(),
  },
};
