/* eslint-disable react/jsx-props-no-spreading */
import { ComponentStory, ComponentMeta } from '@storybook/react';

import SumPriceLabel from '../../components/Atoms/SumPriceLabel';

export default {
  title: 'Atoms/Label/SumPriceLabel',
  component: SumPriceLabel,
} as ComponentMeta<typeof SumPriceLabel>;

const Template: ComponentStory<typeof SumPriceLabel> = (args) => (
  <SumPriceLabel {...args} />
);

export const Default = Template.bind({});
Default.args = {
  price: '1000',
};
