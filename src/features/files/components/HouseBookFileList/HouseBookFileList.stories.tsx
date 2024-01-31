/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import { Meta, StoryObj } from '@storybook/react';

import { ThemeProvider, BookThemeColor } from '@/components/Providers';
import { RecoilRoot, SetRecoilState } from 'recoil';
import { activeFileIdState } from '@/stores/atoms/activeFileIdState';
import {
  houseBookFilePropertyState,
  houseBookIds,
} from '@/stores/atoms/houseBookState';
import { HouseBookList } from './HouseBookFileList';
import { FileState } from '../../utils/houseBookFileProperty';

const meta: Meta<typeof HouseBookList> = {
  title: 'features/files/components/HouseBookList',
  component: HouseBookList,
  decorators: [
    (story) => (
      <ThemeProvider initialValue={BookThemeColor.red}>{story()}</ThemeProvider>
    ),
  ],
  render: () => <HouseBookList />,
};

export default meta;

type Story = StoryObj<typeof HouseBookList>;

const initializeState =
  ({
    filePath,
    fileState = FileState.Dirty,
    isActive = false,
  }: {
    filePath: string;
    fileState?: FileState;
    isActive?: boolean;
  }) =>
  ({ set }: { set: SetRecoilState }) => {
    set(houseBookIds, ['1234']);
    set(houseBookFilePropertyState({ id: '1234' }), {
      filePath,
      fileState,
    });
    if (isActive) {
      set(activeFileIdState, '1234');
    }
  };

export const Default: Story = {
  decorators: [
    (story) => (
      <RecoilRoot
        initializeState={initializeState({ filePath: 'C//work/sample.json' })}
      >
        {story()}
      </RecoilRoot>
    ),
  ],
};
