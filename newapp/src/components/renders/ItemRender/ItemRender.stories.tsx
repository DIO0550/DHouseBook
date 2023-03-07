/* eslint-disable react/jsx-props-no-spreading */
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ItemRender from './ItemRender';

export default {
  title: 'ItemRender',
  component: ItemRender,
} as ComponentMeta<typeof ItemRender>;

const Template: ComponentStory<typeof ItemRender> = () => <ItemRender />;

export const Save = Template.bind({});
