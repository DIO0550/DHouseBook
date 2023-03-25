/* eslint-disable react/jsx-props-no-spreading */
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { PurchasedItemEditor } from './PurchasedItemEditor';

export default {
  title: 'features/components/editors/PurchasedItemEditor',
  component: PurchasedItemEditor,
} as ComponentMeta<typeof PurchasedItemEditor>;

const Template: ComponentStory<typeof PurchasedItemEditor> = () => (
  <PurchasedItemEditor />
);

export const Default = Template.bind({});
