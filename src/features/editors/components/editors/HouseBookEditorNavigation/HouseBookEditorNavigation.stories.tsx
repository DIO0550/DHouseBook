import { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from '@/components/Providers';
import { ThemeColor } from '@/providers/themes/components/ThemeProvider/ThemeColor';
import { HouseBookEditorNavigation } from './HouseBookEditorNavigation';

const meta: Meta<typeof HouseBookEditorNavigation> = {
  component: HouseBookEditorNavigation,
  // eslint-disable-next-line react/jsx-props-no-spreading
  render: (args) => <HouseBookEditorNavigation {...args} />,
  decorators: [
    (story) => (
      <ThemeProvider initialValue={ThemeColor.red}>{story()}</ThemeProvider>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof HouseBookEditorNavigation>;

export const Default: Story = {};
