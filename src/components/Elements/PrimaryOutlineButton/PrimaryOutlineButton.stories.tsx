/* eslint-disable react/jsx-props-no-spreading */
import type { Meta, StoryObj } from '@storybook/react';
import { ThemeColor } from '@/providers/themes/components/ThemeProvider/ThemeColor';
import { ThemeProvider } from '@/components/Providers';
import { PrimaryOutlineButton } from './PrimaryOutlineButton';

const meta: Meta<typeof PrimaryOutlineButton> = {
  component: PrimaryOutlineButton,
  render: (args) => <PrimaryOutlineButton {...args} />,
};

export default meta;

type Story = StoryObj<typeof PrimaryOutlineButton>;

export const Red: Story = {
  decorators: [
    (story) => (
      <ThemeProvider initialValue={ThemeColor.red}>{story()}</ThemeProvider>
    ),
  ],
  args: {
    children: <div>ボタン</div>,
  },
};

export const Purple: Story = {
  decorators: [
    (story) => (
      <ThemeProvider initialValue={ThemeColor.purple}>{story()}</ThemeProvider>
    ),
  ],
  args: {
    children: <div>ボタン</div>,
  },
};

export const Blue: Story = {
  decorators: [
    (story) => (
      <ThemeProvider initialValue={ThemeColor.blue}>{story()}</ThemeProvider>
    ),
  ],
  args: {
    children: <div>ボタン</div>,
  },
};

export const Cyan: Story = {
  decorators: [
    (story) => (
      <ThemeProvider initialValue={ThemeColor.cyan}>{story()}</ThemeProvider>
    ),
  ],
  args: {
    children: <div>ボタン</div>,
  },
};

export const Green: Story = {
  decorators: [
    (story) => (
      <ThemeProvider initialValue={ThemeColor.green}>{story()}</ThemeProvider>
    ),
  ],
  args: {
    children: <div>ボタン</div>,
  },
};

export const Yellow: Story = {
  decorators: [
    (story) => (
      <ThemeProvider initialValue={ThemeColor.yellow}>{story()}</ThemeProvider>
    ),
  ],
  args: {
    children: <div>ボタン</div>,
  },
};

export const Orange: Story = {
  decorators: [
    (story) => (
      <ThemeProvider initialValue={ThemeColor.orange}>{story()}</ThemeProvider>
    ),
  ],
  args: {
    children: <div>ボタン</div>,
  },
};

export const Gray: Story = {
  decorators: [
    (story) => (
      <ThemeProvider initialValue={ThemeColor.gray}>{story()}</ThemeProvider>
    ),
  ],
  args: {
    children: <div>ボタン</div>,
  },
};

export const Disabled: Story = {
  decorators: [
    (story) => (
      <ThemeProvider initialValue={ThemeColor.red}>{story()}</ThemeProvider>
    ),
  ],
  args: {
    children: <div>ボタン</div>,
    disabled: true,
  },
};
