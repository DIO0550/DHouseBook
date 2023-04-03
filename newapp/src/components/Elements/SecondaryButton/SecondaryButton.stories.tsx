/* eslint-disable react/jsx-props-no-spreading */
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SecondaryButton } from './SecondaryButton';
import { BookThemeColor, ThemeProvider } from '@/components/Providers';

export default {
  title: 'components/Elements/SecondaryButton',
  component: SecondaryButton,
} as ComponentMeta<typeof SecondaryButton>;

const Template: ComponentStory<typeof SecondaryButton> = (args) => (
  <SecondaryButton {...args} />
);

export const Red = Template.bind({});
Red.decorators = [
  (Story) => (
    <ThemeProvider initialValue={BookThemeColor.red}>{Story()}</ThemeProvider>
  ),
];
Red.args = {
  title: 'ボタン',
};

export const Purple = Template.bind({});
Purple.decorators = [
  (Story) => (
    <ThemeProvider initialValue={BookThemeColor.purple}>
      {Story()}
    </ThemeProvider>
  ),
];
Purple.args = {
  title: 'ボタン',
};

export const Blue = Template.bind({});
Blue.decorators = [
  (Story) => (
    <ThemeProvider initialValue={BookThemeColor.blue}>{Story()}</ThemeProvider>
  ),
];
Blue.args = {
  title: 'ボタン',
};

export const Cyan = Template.bind({});
Cyan.decorators = [
  (Story) => (
    <ThemeProvider initialValue={BookThemeColor.cyan}>{Story()}</ThemeProvider>
  ),
];
Cyan.args = {
  title: 'ボタン',
};

export const Green = Template.bind({});
Green.decorators = [
  (Story) => (
    <ThemeProvider initialValue={BookThemeColor.green}>{Story()}</ThemeProvider>
  ),
];
Green.args = {
  title: 'ボタン',
};

export const Yellow = Template.bind({});
Yellow.decorators = [
  (Story) => (
    <ThemeProvider initialValue={BookThemeColor.yellow}>
      {Story()}
    </ThemeProvider>
  ),
];
Yellow.args = {
  title: 'ボタン',
};

export const Orange = Template.bind({});
Orange.decorators = [
  (Story) => (
    <ThemeProvider initialValue={BookThemeColor.orange}>
      {Story()}
    </ThemeProvider>
  ),
];
Orange.args = {
  title: 'ボタン',
};

export const Gray = Template.bind({});
Gray.decorators = [
  (Story) => (
    <ThemeProvider initialValue={BookThemeColor.gray}>{Story()}</ThemeProvider>
  ),
];
Gray.args = {
  title: 'ボタン',
};
