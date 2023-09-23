/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import { Meta, StoryObj } from '@storybook/react';

import { ThemeProvider, BookThemeColor } from '@/components/Providers';
import { HouseBookFileProperty } from '@/features/files/utils/houseBookFileProperty';
import { HouseBookList } from './HouseBookList';

const meta: Meta<typeof HouseBookList> = {
  title: 'features/files/components/HouseBookList',
  component: HouseBookList,
  decorators: [
    (story) => (
      <ThemeProvider initialValue={BookThemeColor.red}>{story()}</ThemeProvider>
    ),
  ],
  render: (args) => <HouseBookList {...args} />,
};

export default meta;

type Story = StoryObj<typeof HouseBookList>;

const TestData: HouseBookFileProperty[] = [
  {
    id: 'データ１',
    filePath: '~/Data/File/File1.json',
    isDirty: false,
  },
  {
    id: 'データ２',
    filePath: '~/Data/File/File2.json',
    isDirty: false,
  },
];

export const Default: Story = {
  args: {
    houseBookFiles: TestData,
  },
};
