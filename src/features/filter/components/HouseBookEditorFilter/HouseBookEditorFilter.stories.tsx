/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import { Meta, StoryObj } from '@storybook/react';

import { ThemeProvider } from '@/components/Providers';
import { RecoilRoot, SetRecoilState } from 'recoil';
import { ThemeColor } from '@/providers/themes/components/ThemeProvider/ThemeColor';
import {
  HouseBookFilter,
  houseBookFilterState,
} from '@/stores/atoms/houseBookFilterState';
import { HouseBookItemCategory } from '@/utils/editors/houseBookItemCategory';
import { HouseBookFilterNameCondition } from '@/utils/filters/houseBookFilterName';
import { HouseBookEditorFilter } from './HouseBookEditorFilter';

const meta: Meta<typeof HouseBookEditorFilter> = {
  component: HouseBookEditorFilter,
  decorators: [
    (story) => (
      <ThemeProvider initialValue={ThemeColor.red}>{story()}</ThemeProvider>
    ),
  ],
  render: () => <HouseBookEditorFilter />,
};

export default meta;

type Story = StoryObj<typeof HouseBookEditorFilter>;

const initializeState =
  ({ filter = undefined }: { filter: HouseBookFilter[] | undefined }) =>
  ({ set }: { set: SetRecoilState }) => {
    if (filter) {
      set(houseBookFilterState, filter);
    }
  };

export const FilterOff: Story = {
  decorators: [(story) => <RecoilRoot>{story()}</RecoilRoot>],
};

const Filter: HouseBookFilter[] = [
  {
    id: '1234',
    category: HouseBookItemCategory.Name,
    value: 'House',
    condition: HouseBookFilterNameCondition.Include,
    operation: undefined,
  },
];
export const FilterOn: Story = {
  decorators: [
    (story) => (
      <RecoilRoot initializeState={initializeState({ filter: Filter })}>
        {story()}
      </RecoilRoot>
    ),
  ],
};
