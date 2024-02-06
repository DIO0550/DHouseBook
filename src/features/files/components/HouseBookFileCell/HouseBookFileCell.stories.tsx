/* eslint-disable react/jsx-props-no-spreading */
import { Meta, StoryObj } from '@storybook/react';
import { BookThemeColor, ThemeProvider } from '@/components/Providers';
import { RecoilRoot, SetRecoilState } from 'recoil';
import { houseBookFilePropertyState } from '@/stores/atoms/houseBookState';
import { activeFileIdState } from '@/stores/atoms/activeFileIdState';
import { HouseBookFileCell } from './HouseBookFileCell';
import { HouseBookFileState } from '../../utils/houseBookFileProperty';

const HouseBookId = '1234';
const HouseBookFilePath = 'C//work/sample.json';
const meta: Meta<typeof HouseBookFileCell> = {
  title: 'features/files/components/HouseBookListCell',
  component: HouseBookFileCell,
  args: {
    fileId: HouseBookId,
  },
  render: (args) => <HouseBookFileCell {...args} />,
};

export default meta;

type Story = StoryObj<typeof HouseBookFileCell>;

const initializeState =
  ({
    filePath,
    fileState = HouseBookFileState.Dirty,
    isNewFile = false,
    isActive = false,
  }: {
    filePath: string;
    fileState?: HouseBookFileState;
    isNewFile?: boolean;
    isActive?: boolean;
  }) =>
  ({ set }: { set: SetRecoilState }) => {
    set(houseBookFilePropertyState({ id: '1234' }), {
      filePath,
      fileState,
      isNewFile,
    });
    if (isActive) {
      set(activeFileIdState, HouseBookId);
    }
  };

export const Red: Story = {
  decorators: [
    (story) => (
      <RecoilRoot
        initializeState={initializeState({ filePath: HouseBookFilePath })}
      >
        <ThemeProvider initialValue={BookThemeColor.red}>
          {story()}
        </ThemeProvider>
      </RecoilRoot>
    ),
  ],
};
export const Purple: Story = {
  decorators: [
    (story) => (
      <RecoilRoot
        initializeState={initializeState({ filePath: HouseBookFilePath })}
      >
        <ThemeProvider initialValue={BookThemeColor.purple}>
          {story()}
        </ThemeProvider>
      </RecoilRoot>
    ),
  ],
};

export const Blue: Story = {
  decorators: [
    (story) => (
      <RecoilRoot
        initializeState={initializeState({ filePath: HouseBookFilePath })}
      >
        <ThemeProvider initialValue={BookThemeColor.blue}>
          {story()}
        </ThemeProvider>
      </RecoilRoot>
    ),
  ],
};

export const Cyan: Story = {
  decorators: [
    (story) => (
      <RecoilRoot
        initializeState={initializeState({ filePath: HouseBookFilePath })}
      >
        <ThemeProvider initialValue={BookThemeColor.cyan}>
          {story()}
        </ThemeProvider>
      </RecoilRoot>
    ),
  ],
};

export const Green: Story = {
  decorators: [
    (story) => (
      <RecoilRoot
        initializeState={initializeState({ filePath: HouseBookFilePath })}
      >
        <ThemeProvider initialValue={BookThemeColor.green}>
          {story()}
        </ThemeProvider>
      </RecoilRoot>
    ),
  ],
};

export const Yellow: Story = {
  decorators: [
    (story) => (
      <RecoilRoot
        initializeState={initializeState({ filePath: HouseBookFilePath })}
      >
        <ThemeProvider initialValue={BookThemeColor.yellow}>
          {story()}
        </ThemeProvider>
      </RecoilRoot>
    ),
  ],
};

export const Orange: Story = {
  decorators: [
    (story) => (
      <RecoilRoot
        initializeState={initializeState({ filePath: HouseBookFilePath })}
      >
        <ThemeProvider initialValue={BookThemeColor.orange}>
          {story()}
        </ThemeProvider>
      </RecoilRoot>
    ),
  ],
};

export const Gray: Story = {
  decorators: [
    (story) => (
      <RecoilRoot
        initializeState={initializeState({ filePath: HouseBookFilePath })}
      >
        <ThemeProvider initialValue={BookThemeColor.gray}>
          {story()}
        </ThemeProvider>
      </RecoilRoot>
    ),
  ],
};
