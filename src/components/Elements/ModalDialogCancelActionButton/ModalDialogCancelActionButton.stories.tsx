/* eslint-disable react/jsx-props-no-spreading */
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { ModalDialogCancelActionButton } from './ModalDialogCancelActionButton';

const meta: Meta<typeof ModalDialogCancelActionButton> = {
  component: ModalDialogCancelActionButton,
  render: (args) => <ModalDialogCancelActionButton {...args} />,
};

export default meta;

type Story = StoryObj<typeof ModalDialogCancelActionButton>;

export const Standard: Story = {
  args: {
    title: 'キャンセル',
    onClick: fn(),
  },
};
