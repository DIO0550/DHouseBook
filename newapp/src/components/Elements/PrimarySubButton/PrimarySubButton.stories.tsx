/* eslint-disable react/jsx-props-no-spreading */
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PrimarySubButton } from './PrimarySubButton';
import { ThemeProvider } from '@/components/Providers';

export default {
  title: 'components/Elements/PrimarySubButton',
  component: PrimarySubButton,
} as ComponentMeta<typeof PrimarySubButton>;

const Template: ComponentStory<typeof PrimarySubButton> = (args) => (
  <PrimarySubButton {...args} />
);

export const Default = Template.bind({});
Default.decorators = [(Story) => <ThemeProvider>{Story()}</ThemeProvider>];
Default.args = {
  title: 'ボタン',
};
