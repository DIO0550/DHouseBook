/* eslint-disable react/jsx-props-no-spreading */
import type { Meta, StoryObj } from '@storybook/react';
import { PrimaryMaskInput } from './PrimaryMaskInput';

const meta: Meta<typeof PrimaryMaskInput> = {
  component: PrimaryMaskInput,
  render: (args) => <PrimaryMaskInput {...args} />,
};

export default meta;

type Story = StoryObj<typeof PrimaryMaskInput>;

export const MaskTelNumber: Story = {
  args: {
    mask: '(999)-999-9999',
  },
};
