/* eslint-disable react/jsx-props-no-spreading */
import type { Meta, StoryObj } from '@storybook/react';
import { BookThemeColor, ThemeProvider } from '@/components/Providers';
import { PrimaryButton } from './PrimaryButton';

const meta: Meta<typeof PrimaryButton> = {
  title: 'PrimaryButton',
  component: PrimaryButton,
  render: (args) => <PrimaryButton {...args} />,
};

export default meta;

type Story = StoryObj<typeof PrimaryButton>;

export const Red: Story = {
  decorators: [
    (story) => (
      <ThemeProvider initialValue={BookThemeColor.red}>{story()}</ThemeProvider>
    ),
  ],
  args: {
    title: 'ボタン',
  },
};

export const Purple: Story = {
  decorators: [
    (story) => (
      <ThemeProvider initialValue={BookThemeColor.purple}>
        {story()}
      </ThemeProvider>
    ),
  ],
  args: {
    title: 'ボタン',
  },
};

export const Blue: Story = {
  decorators: [
    (story) => (
      <ThemeProvider initialValue={BookThemeColor.blue}>
        {story()}
      </ThemeProvider>
    ),
  ],
  args: {
    title: 'ボタン',
  },
};

export const Cyan: Story = {
  decorators: [
    (story) => (
      <ThemeProvider initialValue={BookThemeColor.cyan}>
        {story()}
      </ThemeProvider>
    ),
  ],
  args: {
    title: 'ボタン',
  },
};

export const Green: Story = {
  decorators: [
    (story) => (
      <ThemeProvider initialValue={BookThemeColor.green}>
        {story()}
      </ThemeProvider>
    ),
  ],
  args: {
    title: 'ボタン',
  },
};

export const Yellow: Story = {
  decorators: [
    (story) => (
      <ThemeProvider initialValue={BookThemeColor.yellow}>
        {story()}
      </ThemeProvider>
    ),
  ],
  args: {
    title: 'ボタン',
  },
};

export const Orange: Story = {
  decorators: [
    (story) => (
      <ThemeProvider initialValue={BookThemeColor.orange}>
        {story()}
      </ThemeProvider>
    ),
  ],
  args: {
    title: 'ボタン',
  },
};

export const Gray: Story = {
  decorators: [
    (story) => (
      <ThemeProvider initialValue={BookThemeColor.gray}>
        {story()}
      </ThemeProvider>
    ),
  ],
  args: {
    title: 'ボタン',
  },
};
