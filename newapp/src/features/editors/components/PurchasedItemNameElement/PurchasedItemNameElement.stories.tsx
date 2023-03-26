/* eslint-disable react/jsx-props-no-spreading */
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { PurchasedItemNameElement } from './PurchasedItemNameElement';

export default {
  title: 'renders/PurchasedItemNameElement',
  component: PurchasedItemNameElement,
} as ComponentMeta<typeof PurchasedItemNameElement>;

const Template: ComponentStory<typeof PurchasedItemNameElement> = (args) => (
  <PurchasedItemNameElement {...args} />
);

export const Default = Template.bind({});
