/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-props-no-spreading */
import { configureStore } from '@reduxjs/toolkit';
import { Meta, StoryObj } from '@storybook/react';
import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { bookDateSlice } from '@/stores/slices/bookDateSlice';

import { HouseBookDate } from './HouseBookDate';

const meta: Meta<typeof HouseBookDate> = {
  title: 'HouseBookDate',
  component: HouseBookDate,
  render: () => <HouseBookDate />,
};

export default meta;

type Story = StoryObj<typeof HouseBookDate>;

type MockStoreProps = {
  year?: number;
  month?: number;
};

const MockStore = ({
  year = 2020,
  month = 1,
  children,
}: MockStoreProps & { children: ReactNode }) => {
  const store = configureStore({
    reducer: {
      [bookDateSlice.name]: bookDateSlice.reducer,
    },
    preloadedState: {
      bookDate: {
        ...bookDateSlice.getInitialState(),
        year,
        month,
      },
    },
  });

  return <Provider store={store}>{children}</Provider>;
};

export const Default: Story = {
  decorators: [(story) => <MockStore>{story()}</MockStore>],
};
