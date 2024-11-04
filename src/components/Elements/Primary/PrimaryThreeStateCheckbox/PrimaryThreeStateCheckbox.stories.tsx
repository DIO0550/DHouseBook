/* eslint-disable react/jsx-props-no-spreading */
import type { Meta, StoryObj } from '@storybook/react';
import { ThemeColor } from '@/providers/themes/components/ThemeProvider/ThemeColor';
import { ThemeProvider } from '@/components/Providers';
import { PrimaryThreeStateCheckbox } from './PrimaryThreeStateCheckbox';

const meta: Meta<typeof PrimaryThreeStateCheckbox> = {
  component: PrimaryThreeStateCheckbox,
  render: (args) => <PrimaryThreeStateCheckbox {...args} />,
};

export default meta;

type Story = StoryObj<typeof PrimaryThreeStateCheckbox>;

export const Red: Story = {
  decorators: [
    (story) => (
      <ThemeProvider initialValue={ThemeColor.red}>{story()}</ThemeProvider>
    ),
  ],
};

export const Purple: Story = {
  decorators: [
    (story) => (
      <ThemeProvider initialValue={ThemeColor.purple}>{story()}</ThemeProvider>
    ),
  ],
};

export const Blue: Story = {
  decorators: [
    (story) => (
      <ThemeProvider initialValue={ThemeColor.blue}>{story()}</ThemeProvider>
    ),
  ],
};

export const Cyan: Story = {
  decorators: [
    (story) => (
      <ThemeProvider initialValue={ThemeColor.cyan}>{story()}</ThemeProvider>
    ),
  ],
};

export const Green: Story = {
  decorators: [
    (story) => (
      <ThemeProvider initialValue={ThemeColor.green}>{story()}</ThemeProvider>
    ),
  ],
};

export const Yellow: Story = {
  decorators: [
    (story) => (
      <ThemeProvider initialValue={ThemeColor.yellow}>{story()}</ThemeProvider>
    ),
  ],
};

export const Orange: Story = {
  decorators: [
    (story) => (
      <ThemeProvider initialValue={ThemeColor.orange}>{story()}</ThemeProvider>
    ),
  ],
};

export const Gray: Story = {
  decorators: [
    (story) => (
      <ThemeProvider initialValue={ThemeColor.gray}>{story()}</ThemeProvider>
    ),
  ],
};

export const Checked: Story = {
  decorators: [
    (story) => (
      <ThemeProvider initialValue={ThemeColor.red}>{story()}</ThemeProvider>
    ),
  ],
  args: {
    checked: true,
  },
};

export const IndeterminateChecked: Story = {
  decorators: [
    (story) => (
      <ThemeProvider initialValue={ThemeColor.red}>{story()}</ThemeProvider>
    ),
  ],
  args: {
    checked: true,
    indeterminate: true,
  },
};

export const IndeterminateNotChecked: Story = {
  decorators: [
    (story) => (
      <ThemeProvider initialValue={ThemeColor.red}>{story()}</ThemeProvider>
    ),
  ],
  args: {
    checked: false,
    indeterminate: true,
  },
};
