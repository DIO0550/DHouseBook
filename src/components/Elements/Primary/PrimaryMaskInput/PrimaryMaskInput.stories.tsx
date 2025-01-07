/* eslint-disable react/jsx-props-no-spreading */
import type { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from '@/components/Providers';
import { ThemeColor } from '@/providers/themes/components/ThemeProvider/ThemeColor';
import { PrimaryMaskInput } from './PrimaryMaskInput';

const meta: Meta<typeof PrimaryMaskInput> = {
  component: PrimaryMaskInput,
  decorators: [
    (story) => (
      <ThemeProvider initialValue={ThemeColor.red}>{story()}</ThemeProvider>
    ),
  ],
  render: (args) => <PrimaryMaskInput {...args} />,
};

export default meta;

type Story = StoryObj<typeof PrimaryMaskInput>;

export const MaskTelNumber: Story = {
  args: {
    mask: '(999)-999-9999',
  },
};

export const MaskDate: Story = {
  args: {
    mask: '9999/99/99',
  },
};

export const OnlyNumber: Story = {
  args: {
    mask: /[0-9]/,
  },
};
