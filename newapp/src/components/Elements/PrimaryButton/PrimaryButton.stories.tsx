/* eslint-disable react/jsx-props-no-spreading */
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PrimaryButton } from './PrimaryButton';
import { ThemeProvider } from '@/components/Providers';

export default {
  title: 'components/Elements/PrimaryButton',
  component: PrimaryButton,
} as ComponentMeta<typeof PrimaryButton>;

const Template: ComponentStory<typeof PrimaryButton> = (args) => (
  <PrimaryButton {...args} />
);

export const Default = Template.bind({});
Default.decorators = [(Story) => <ThemeProvider>{Story()}</ThemeProvider>];
Default.args = {
  title: 'ボタン',
};
