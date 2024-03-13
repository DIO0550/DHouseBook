/* eslint-disable react/jsx-props-no-spreading */
import type { Meta, StoryObj } from '@storybook/react';
import { ThemeColor } from '@/providers/themes/components/ThemeProvider/ThemeColor';
import { ThemeProvider } from '@/components/Providers';
import { ResizeableBox } from './ResizeableBox';

const meta: Meta<typeof ResizeableBox> = {
  component: ResizeableBox,
  render: (args) => (
    <div style={{ height: '100%' }}>
      <ResizeableBox {...args} />
    </div>
  ),
};

export default meta;

type StoryType = StoryObj<typeof ResizeableBox>;

export const Default: StoryType = {
  args: {
    children: <div style={{ height: '100%', width: '50px' }}>子要素</div>,
  },
  decorators: [
    (Story) => (
      <ThemeProvider initialValue={ThemeColor.red}>
        <Story />
      </ThemeProvider>
    ),
  ],
};
