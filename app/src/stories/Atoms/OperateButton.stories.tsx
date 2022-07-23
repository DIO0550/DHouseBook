/* eslint-disable react/jsx-props-no-spreading */
import { ComponentStory, ComponentMeta } from '@storybook/react';

import OperateButton from '../../components/Atoms/OperateButton';

export default {
  title: 'Atoms/Button/OperateButton',
  component: OperateButton,
} as ComponentMeta<typeof OperateButton>;

const Template: ComponentStory<typeof OperateButton> = (args) => (
  <OperateButton {...args} />
);

export const Save = Template.bind({});
Save.args = {
  title: '保存',
  onClick: () => {},
};
