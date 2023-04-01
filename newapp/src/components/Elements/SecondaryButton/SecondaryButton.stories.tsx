/* eslint-disable react/jsx-props-no-spreading */
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SecondaryButton } from './SecondaryButton';
import { ThemeProvider } from '@/components/Providers';

export default {
  title: 'components/Elements/SecondaryButton',
  component: SecondaryButton,
} as ComponentMeta<typeof SecondaryButton>;

const Template: ComponentStory<typeof SecondaryButton> = (args) => (
  <SecondaryButton {...args} />
);

export const Default = Template.bind({});
Default.decorators = [(Story) => <ThemeProvider>{Story()}</ThemeProvider>];
Default.args = {
  title: 'ボタン',
};
