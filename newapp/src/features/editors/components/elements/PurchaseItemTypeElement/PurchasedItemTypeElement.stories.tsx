/* eslint-disable react/jsx-props-no-spreading */
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { PurchasedItemTypeElement } from './PurchasedItemTypeElement';

export default {
  title: 'features/components/editors/PurchasedItemTypeElement',
  component: PurchasedItemTypeElement,
} as ComponentMeta<typeof PurchasedItemTypeElement>;

const Template: ComponentStory<typeof PurchasedItemTypeElement> = (args) => (
  <PurchasedItemTypeElement {...args}>日常品</PurchasedItemTypeElement>
);

export const Default = Template.bind({});
