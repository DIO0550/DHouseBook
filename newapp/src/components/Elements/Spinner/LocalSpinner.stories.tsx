/* eslint-disable react/jsx-props-no-spreading */
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { LocalSpinner } from './LocalSpinner';

export default {
  title: 'components/Elements/LocalSpinner',
  component: LocalSpinner,
} as ComponentMeta<typeof LocalSpinner>;

const Template: ComponentStory<typeof LocalSpinner> = (args) => (
  <div style={{ width: '100%', height: '500px' }}>
    <LocalSpinner {...args} />
  </div>
);

export const Open = Template.bind({});
Open.args = {
  isOpen: true,
};
