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

const meta: Meta<typeof Sidebar> = {
  component: Sidebar,
};

export default meta;

type StoryType = StoryObj<typeof Sidebar>;

const initializeState =
  ({
    filePath,
    isDirty = false,
    isActive = false,
  }: {
    filePath: string;
    isDirty?: boolean;
    isActive?: boolean;
  }) =>
  ({ set }: { set: SetRecoilState }) => {
    set(houseBookIds, ['1234']);
    set(houseBookFilePropertyState({ id: '1234' }), {
      filePath,
      isDirty,
    });
    if (isActive) {
      set(activeFileIdState, '1234');
    }
  };

export const Default: StoryType = {
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
