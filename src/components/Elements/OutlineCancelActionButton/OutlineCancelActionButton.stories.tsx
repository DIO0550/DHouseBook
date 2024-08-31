/* eslint-disable react/jsx-props-no-spreading */
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { OutlineCancelActionButton } from './OutlineCancelActionButton';

const meta: Meta<typeof OutlineCancelActionButton> = {
  component: OutlineCancelActionButton,
  render: (args) => <OutlineCancelActionButton {...args} />,
};

export default meta;

type Story = StoryObj<typeof OutlineCancelActionButton>;

export const Standard: Story = {
  args: {
    title: 'キャンセル',
    onClick: fn(),
  },
};
