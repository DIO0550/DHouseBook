/* eslint-disable react/jsx-props-no-spreading */
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { PurchasedItemPrchaseDateElement } from './PurchasedItemPrchaseDateElement';

export default {
  title: 'features/components/editors/PurchasedItemPrchaseDateElement',
  component: PurchasedItemPrchaseDateElement,
} as ComponentMeta<typeof PurchasedItemPrchaseDateElement>;

const Template: ComponentStory<typeof PurchasedItemPrchaseDateElement> = (
  args,
) => (
  <PurchasedItemPrchaseDateElement {...args}>
    2022/12/13
  </PurchasedItemPrchaseDateElement>
);

export const Default = Template.bind({});
