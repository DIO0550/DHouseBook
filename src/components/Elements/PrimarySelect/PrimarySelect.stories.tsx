/* eslint-disable react/jsx-props-no-spreading */
import type { Meta, StoryObj } from '@storybook/react';
import { ThemeColor } from '@/providers/themes/components/ThemeProvider/ThemeColor';
import { ThemeProvider } from '@/components/Providers';
import { PrimarySelect } from './PrimarySelect';
import { Option } from './useSelect';

const meta: Meta<typeof PrimarySelect> = {
  component: PrimarySelect,
  render: (args) => (
    <div style={{ marginTop: '50px', height: 'fit-content' }}>
      <PrimarySelect {...args} />
    </div>
  ),
};

export default meta;

type Story = StoryObj<typeof PrimarySelect>;
const Options: Option[] = Array.from({ length: 10 }, (_, i) => ({
  value: `value-${i}`,
  label: `label-${i}`,
}));

export const Red: Story = {
  decorators: [
    (story) => (
      <ThemeProvider initialValue={ThemeColor.red}>{story()}</ThemeProvider>
    ),
  ],
  args: {
    defaultValue: 'value-1',
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
    defaultValue: 'value-1',
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
    defaultValue: 'value-1',
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
    defaultValue: 'value-1',
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
    defaultValue: 'value-1',
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
    defaultValue: 'value-1',
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
    defaultValue: 'value-1',
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
    defaultValue: 'value-1',
    options: Options,
  },
};

export const Top: Story = {
  decorators: [
    (story) => (
      <ThemeProvider initialValue={ThemeColor.gray}>{story()}</ThemeProvider>
    ),
  ],
  args: {
    defaultValue: 'value-1',
    options: Options,
  },
  parameters: {
    docs: {
      source: { type: 'code' },
    },
    story: {
      inline: true,
      iframeHeight: '500px', // iframeの高さ
    },
    styles: `
    body {
      padding: 0;
      margin: 0;
      min-height: 500px;
      position: relative;
    }
    #storybook-root {
      height: 100%;
      width: 100%;
    }
  `,
  },
  render: (args) => (
    <div style={{ marginTop: '400px', height: 'fit-content' }}>
      <PrimarySelect {...args} />
    </div>
  ),
};
