/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-props-no-spreading */
import { configureStore } from '@reduxjs/toolkit';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { bookDateSlice } from 'stores/slices/bookDateSlice';

import { HouseBookDate } from './HouseBookDate';

export default {
  title: 'renders/HouseBookDate',
  component: HouseBookDate,
} as ComponentMeta<typeof HouseBookDate>;

const Template: ComponentStory<typeof HouseBookDate> = () => <HouseBookDate />;

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

export const Default = Template.bind({});
Default.decorators = [(story) => <MockStore>{story()}</MockStore>];
