/* eslint-disable react/jsx-props-no-spreading */
import type { Meta, StoryObj } from '@storybook/react';
import { BookThemeColor, ThemeProvider } from '@/components/Providers';
import { activeFileIdState } from '@/stores/atoms/activeFileIdState';
import {
  houseBookIds,
  houseBookFilePropertyState,
} from '@/stores/atoms/houseBookState';
import { SetRecoilState, RecoilRoot } from 'recoil';
import { Sidebar } from './Sidebar';
import { FileState } from '../../utils/houseBookFileProperty';

const meta: Meta<typeof Sidebar> = {
  component: Sidebar,
};

export default meta;

type StoryType = StoryObj<typeof Sidebar>;

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

export const NotDirty: StoryType = {
  decorators: [
    (Story) => (
      <ThemeProvider initialValue={BookThemeColor.red}>
        <RecoilRoot
          initializeState={initializeState({ filePath: 'C//work/sample.json' })}
        >
          <Story />
        </RecoilRoot>
      </ThemeProvider>
    ),
  ],
};

export const Dirty: StoryType = {
  decorators: [
    (Story) => (
      <ThemeProvider initialValue={BookThemeColor.red}>
        <RecoilRoot
          initializeState={initializeState({
            filePath: 'C//work/sample.json',
            fileState: FileState.Dirty,
          })}
        >
          <Story />
        </RecoilRoot>
      </ThemeProvider>
    ),
  ],
};
