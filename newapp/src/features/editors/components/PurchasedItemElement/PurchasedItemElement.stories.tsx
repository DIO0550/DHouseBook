/* eslint-disable react/jsx-props-no-spreading */
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { PurchasedItemElement } from './PurchasedItemElement';

export default {
  title: 'renders/PurchasedItemElement',
  component: PurchasedItemElement,
} as ComponentMeta<typeof PurchasedItemElement>;

const Template: ComponentStory<typeof PurchasedItemElement> = (args) => (
  <PurchasedItemElement {...args} />
);

export const Default = Template.bind({});
