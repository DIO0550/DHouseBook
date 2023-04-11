/* eslint-disable react/jsx-props-no-spreading */
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { PurchasedItemPriceElement } from './PurchasedItemPriceElement';

export default {
  title: 'features/components/editors/PurchasedItemPriceElement',
  component: PurchasedItemPriceElement,
} as ComponentMeta<typeof PurchasedItemPriceElement>;

const Template: ComponentStory<typeof PurchasedItemPriceElement> = (args) => (
  <PurchasedItemPriceElement {...args}>1,1000</PurchasedItemPriceElement>
);

export const Default = Template.bind({});
