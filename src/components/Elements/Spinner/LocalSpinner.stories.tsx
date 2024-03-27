/* eslint-disable react/jsx-props-no-spreading */
import { Meta, StoryObj } from '@storybook/react';
import { LocalSpinner } from './LocalSpinner';

const meta: Meta<typeof LocalSpinner> = {
  title: 'LocalSpinner',
  component: LocalSpinner,
  render: (args) => (
    <div style={{ width: '100%', height: '500px' }}>
      <LocalSpinner {...args} />
    </div>
  ),
};
export default meta;
type Story = StoryObj<typeof LocalSpinner>;

export const Open: Story = {
  args: {
    isOpen: true,
  },
};
