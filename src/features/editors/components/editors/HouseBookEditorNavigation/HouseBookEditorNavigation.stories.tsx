import { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from '@/components/Providers';
import { ThemeColor } from '@/providers/themes/components/ThemeProvider/ThemeColor';
import {
  houseBookIds,
  houseBookDateState,
} from '@/stores/atoms/houseBookState';
import { SetRecoilState, RecoilRoot } from 'recoil';
import { HouseBookDate } from '@/features/files/utils/houseBookDate';
import { ReactNode } from 'react';
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

const MockProvider = ({
  date,
  children,
}: {
  date: HouseBookDate;
  children: ReactNode;
}) => (
  <RecoilRoot
    initializeState={({ set }: { set: SetRecoilState }) => {
      set(houseBookIds, ['1234']);
      set(houseBookDateState({ id: '1234' }), date);
    }}
  >
    {children}
  </RecoilRoot>
);

export const Default: Story = {
  args: {
    date: {
      year: 2024,
      month: 4,
    },
  },
  decorators: [
    (TargetStory) => (
      <MockProvider
        date={{
          year: 2024,
          month: 4,
        }}
      >
        <TargetStory />
      </MockProvider>
    ),
  ],
};
