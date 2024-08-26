/* eslint-disable react/jsx-props-no-spreading */
import type { Meta, StoryObj } from '@storybook/react';
import { ThemeColor } from '@/providers/themes/components/ThemeProvider/ThemeColor';
import { ThemeProvider } from '@/components/Providers';
import { ModalDialogActionButton } from './ModalDialogActionButton';

const meta: Meta<typeof ModalDialogActionButton> = {
  component: ModalDialogActionButton,
  render: (args) => <ModalDialogActionButton {...args} />,
};

export default meta;

type Story = StoryObj<typeof ModalDialogActionButton>;

export const Red: Story = {
  decorators: [
    (story) => (
      <ThemeProvider initialValue={ThemeColor.red}>{story()}</ThemeProvider>
    ),
  ],
  args: {
    title: 'ボタン',
  },
};

export const Purple: Story = {
  decorators: [
    (story) => (
      <ThemeProvider initialValue={ThemeColor.purple}>{story()}</ThemeProvider>
    ),
  ],
  args: {
    title: 'ボタン',
  },
};

export const Blue: Story = {
  decorators: [
    (story) => (
      <ThemeProvider initialValue={ThemeColor.blue}>{story()}</ThemeProvider>
    ),
  ],
  args: {
    title: 'ボタン',
  },
};

export const Cyan: Story = {
  decorators: [
    (story) => (
      <ThemeProvider initialValue={ThemeColor.cyan}>{story()}</ThemeProvider>
    ),
  ],
  args: {
    title: 'ボタン',
  },
};

export const Green: Story = {
  decorators: [
    (story) => (
      <ThemeProvider initialValue={ThemeColor.green}>{story()}</ThemeProvider>
    ),
  ],
  args: {
    title: 'ボタン',
  },
};

export const Yellow: Story = {
  decorators: [
    (story) => (
      <ThemeProvider initialValue={ThemeColor.yellow}>{story()}</ThemeProvider>
    ),
  ],
  args: {
    title: 'ボタン',
  },
};

export const Orange: Story = {
  decorators: [
    (story) => (
      <ThemeProvider initialValue={ThemeColor.orange}>{story()}</ThemeProvider>
    ),
  ],
  args: {
    title: 'ボタン',
  },
};

export const Gray: Story = {
  decorators: [
    (story) => (
      <ThemeProvider initialValue={ThemeColor.gray}>{story()}</ThemeProvider>
    ),
  ],
  args: {
    title: 'ボタン',
  },
};
