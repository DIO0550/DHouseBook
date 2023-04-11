/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { PurchasedItemElement } from './PurchasedItemElement';
import { PurchasedItemNameElement } from '../PurchasedItemNameElement/PurchasedItemNameElement';

export default {
  title: 'renders/PurchasedItemElement',
  component: PurchasedItemElement,
} as ComponentMeta<typeof PurchasedItemElement>;

const Template: ComponentStory<typeof PurchasedItemElement> = (args) => (
  <PurchasedItemElement {...args}>
    <PurchasedItemNameElement
      attributes={args.attributes}
      element={args.element}
    >
      名前
    </PurchasedItemNameElement>
  </PurchasedItemElement>
);

export const Default = Template.bind({});
