import React from 'react';
import Input from './Input';

export default {
  title: 'Form/Input',
  component: Input,
};

export const Small = () => <Input text='Small' variant='small' />;
export const Medium = () => <Input text='Medium' variant='medium' />;
export const Large = () => <Input text='Large' variant='large' />;
