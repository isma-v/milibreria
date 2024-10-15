import React from 'react';
import MyButton from './MyButton';
import { Button } from '@mui/material';

export default {
  title: 'Components/MyButton',
  component: MyButton,
  argTypes: {
    isFollowing: { control: 'boolean' },
    textColor: { control: 'color' },
    backgroundColor: { control: 'color' },
    size: {
      control: { type: 'select', options: ['small', 'medium', 'large'] },
    },
    onClick: { action: 'clicked' },
  },
};

const Template = (args) => <MyButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  isFollowing: false,
  children: 'Seguir',
  textColor: 'black',
  backgroundColor: 'transparent',
  size: 'medium',
};

export const Following = Template.bind({});
Following.args = {
  isFollowing: true,
  children: 'Siguiendo',
  textColor: 'white',
  backgroundColor: 'blue',
  size: 'medium',
};

export const Disabled = Template.bind({});
Disabled.args = {
  isFollowing: false,
  children: 'Seguir',
  textColor: 'gray',
  backgroundColor: 'lightgray',
  size: 'medium',
  disabled: true,
};