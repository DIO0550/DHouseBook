/* eslint-disable react/jsx-props-no-spreading */
import type { Meta, StoryObj } from '@storybook/react';
import { ResizeableBox } from './ResizeableBox';

const meta: Meta<typeof ResizeableBox> = {
  component: ResizeableBox,
  render: (args) => (
    <div style={{ height: '100%', width: '100px' }}>
      <ResizeableBox {...args} />
    </div>
  ),
};

export default meta;

type Story = StoryObj<typeof ResizeableBox>;

export const Default: Story = {
  args: {
    children: <div style={{ height: '100%', width: '50px' }}>子要素</div>,
  },
};
