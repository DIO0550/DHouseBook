/* eslint-disable react/jsx-props-no-spreading */
import { Meta, StoryObj } from '@storybook/react';
import { BookThemeColor, ThemeProvider } from '@/components/Providers';
import { HouseBookListCell } from './HouseBookListCell';

const meta: Meta<typeof HouseBookListCell> = {
  title: 'features/files/componsents/HouseBookListCell',
  component: HouseBookListCell,
  args: {
    isActive: false,
    fileId: '1234',
    filePath: 'Users/Data/test.json',
  },
  render: (args) => <HouseBookListCell {...args} />,
};

export default meta;

type Story = StoryObj<typeof HouseBookListCell>;

export const Red: Story = {
  decorators: [
    (story) => (
      <ThemeProvider initialValue={BookThemeColor.red}>{story()}</ThemeProvider>
    ),
  ],
  args: {
    isActive: true,
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
    isActive: true,
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
    isActive: true,
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
    isActive: true,
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
    isActive: true,
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
    isActive: true,
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
    isActive: true,
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
    isActive: true,
  },
};
