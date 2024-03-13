/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from '@/components/Providers';
import { ThemeColor } from '@/providers/themes/components/ThemeProvider/ThemeColor';
import { PurchasedItemEditor } from './PurchasedItemEditor';

const meta: Meta<typeof PurchasedItemEditor> = {
  title: 'features/editors/components/editors/PurchasedItemEditor',
  component: PurchasedItemEditor,
  render: (args) => <PurchasedItemEditor {...args} />,
  decorators: [
    (story) => (
      <ThemeProvider initialValue={ThemeColor.red}>{story()}</ThemeProvider>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof PurchasedItemEditor>;

export const Default: Story = {};
