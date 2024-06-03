import { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from '@/components/Providers';
import { ThemeColor } from '@/providers/themes/components/ThemeProvider/ThemeColor';
import {
  houseBookIds,
  houseBookDateState,
  houseBookFilePropertyState,
  houseBookItemsState,
} from '@/stores/atoms/houseBookState';
import { SetRecoilState, RecoilRoot } from 'recoil';
import { HouseBookDate } from '@/features/files/utils/houseBookDate';
import { ReactNode } from 'react';
import { HouseBookFileState } from '@/features/files/utils/houseBookFileProperty';
import { HouseBookEditor } from './HouseBookEditor';

const meta: Meta<typeof HouseBookEditor> = {
  component: HouseBookEditor,
  // eslint-disable-next-line react/jsx-props-no-spreading
  render: (args) => <HouseBookEditor {...args} />,
  decorators: [
    (story) => (
      <ThemeProvider initialValue={ThemeColor.red}>{story()}</ThemeProvider>
    ),
  ],
};

export default meta;

const FileId = '1234';
type Story = StoryObj<typeof HouseBookEditor>;
const MockProvider = ({
  date,
  children,
}: {
  date: HouseBookDate;
  children: ReactNode;
}) => (
  <RecoilRoot
    initializeState={({ set }: { set: SetRecoilState }) => {
      set(houseBookIds, [FileId]);
      set(houseBookFilePropertyState({ id: FileId }), {
        filePath: '/Data/20240101.json',
        fileState: HouseBookFileState.Dirty,
        isNewFile: false,
      });
      set(houseBookItemsState({ id: FileId }), []);
      set(houseBookDateState({ id: FileId }), date);
    }}
  >
    {children}
  </RecoilRoot>
);

export const Default: Story = {
  args: {
    fileId: FileId,
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
