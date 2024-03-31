/* eslint-disable react/jsx-props-no-spreading */
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { CloseButton } from './CloseButton';

const meta: Meta<typeof CloseButton> = {
  component: CloseButton,
  args: {
    onClick: fn(),
  },
  render: (args) => <CloseButton {...args} />,
};

export default meta;

type Story = StoryObj<typeof CloseButton>;

export const Standard: Story = {};
