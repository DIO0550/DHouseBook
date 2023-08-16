/* eslint-disable react/jsx-props-no-spreading */
import type { Meta, StoryObj } from '@storybook/react';
import { BookThemeColor, ThemeProvider } from '@/components/Providers';
import { PrimaryColorInput } from './PrimaryColorInput';

const meta: Meta<typeof PrimaryColorInput> = {
  title: 'PrimaryColorInput',
  component: PrimaryColorInput,
  args: {
    defaultValue: '入力欄',
  },
  render: (args) => <PrimaryColorInput {...args} />,
};

export default meta;

type Story = StoryObj<typeof PrimaryColorInput>;

export const Red: Story = {
  decorators: [
    (story) => (
      <ThemeProvider initialValue={BookThemeColor.red}>{story()}</ThemeProvider>
    ),
  ],
};

export const Purple: Story = {
  decorators: [
    (story) => (
      <ThemeProvider initialValue={BookThemeColor.purple}>
        {story()}
      </ThemeProvider>
    ),
  ],
};

export const Blue: Story = {
  decorators: [
    (story) => (
      <ThemeProvider initialValue={BookThemeColor.blue}>
        {story()}
      </ThemeProvider>
    ),
  ],
};

export const Cyan: Story = {
  decorators: [
    (story) => (
      <ThemeProvider initialValue={BookThemeColor.cyan}>
        {story()}
      </ThemeProvider>
    ),
  ],
};

export const Green: Story = {
  decorators: [
    (story) => (
      <ThemeProvider initialValue={BookThemeColor.green}>
        {story()}
      </ThemeProvider>
    ),
  ],
};

export const Yellow: Story = {
  decorators: [
    (story) => (
      <ThemeProvider initialValue={BookThemeColor.yellow}>
        {story()}
      </ThemeProvider>
    ),
  ],
};

export const Orange: Story = {
  decorators: [
    (story) => (
      <ThemeProvider initialValue={BookThemeColor.orange}>
        {story()}
      </ThemeProvider>
    ),
  ],
};

export const Gray: Story = {
  decorators: [
    (story) => (
      <ThemeProvider initialValue={BookThemeColor.gray}>
        {story()}
      </ThemeProvider>
    ),
  ],
};
