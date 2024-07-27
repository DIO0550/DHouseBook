/* eslint-disable react/jsx-props-no-spreading */
import type { Meta, StoryObj } from '@storybook/react';
import { ThemeColor } from '@/providers/themes/components/ThemeProvider/ThemeColor';
import { ThemeProvider } from '@/components/Providers';
import { PrimarySelect } from './PrimarySelect';
import { Option } from './useSelect';

const meta: Meta<typeof PrimarySelect> = {
  component: PrimarySelect,
  render: (args) => <PrimarySelect {...args} />,
};

export default meta;

type Story = StoryObj<typeof PrimarySelect>;
const Options: Option[] = [
  {
    label: '名前',
    value: 'Name',
  },
  {
    label: '値段',
    value: 'Price',
  },
];

export const Red: Story = {
  decorators: [
    (story) => (
      <ThemeProvider initialValue={ThemeColor.red}>{story()}</ThemeProvider>
    ),
  ],
  args: {
    defaultValue: 'Name',
    options: Options,
  },
};

export const Purple: Story = {
  decorators: [
    (story) => (
      <ThemeProvider initialValue={ThemeColor.purple}>{story()}</ThemeProvider>
    ),
  ],
  args: {
    defaultValue: 'Name',
    options: Options,
  },
};

export const Blue: Story = {
  decorators: [
    (story) => (
      <ThemeProvider initialValue={ThemeColor.blue}>{story()}</ThemeProvider>
    ),
  ],
  args: {
    defaultValue: 'Name',
    options: Options,
  },
};

export const Cyan: Story = {
  decorators: [
    (story) => (
      <ThemeProvider initialValue={ThemeColor.cyan}>{story()}</ThemeProvider>
    ),
  ],
  args: {
    defaultValue: 'Name',
    options: Options,
  },
};

export const Green: Story = {
  decorators: [
    (story) => (
      <ThemeProvider initialValue={ThemeColor.green}>{story()}</ThemeProvider>
    ),
  ],
  args: {
    defaultValue: 'Name',
    options: Options,
  },
};

export const Yellow: Story = {
  decorators: [
    (story) => (
      <ThemeProvider initialValue={ThemeColor.yellow}>{story()}</ThemeProvider>
    ),
  ],
  args: {
    defaultValue: 'Name',
    options: Options,
  },
};

export const Orange: Story = {
  decorators: [
    (story) => (
      <ThemeProvider initialValue={ThemeColor.orange}>{story()}</ThemeProvider>
    ),
  ],
  args: {
    defaultValue: 'Name',
    options: Options,
  },
};

export const Gray: Story = {
  decorators: [
    (story) => (
      <ThemeProvider initialValue={ThemeColor.gray}>{story()}</ThemeProvider>
    ),
  ],
  args: {
    defaultValue: 'Name',
    options: Options,
  },
};
