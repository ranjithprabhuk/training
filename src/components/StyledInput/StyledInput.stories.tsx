import React from 'react';
import { StyledInput } from './StyledInput';
import { withKnobs, boolean } from '@storybook/addon-knobs';

export default {
  title: 'Input',
  component: StyledInput,
  decorators: [withKnobs]
};

export const Default: React.FC = () => {
  return (
    <StyledInput />
  )
};

export const Error: React.FC = () => {
  return (
    <StyledInput hasError={boolean('has error', true)}/>
  )
};

export const Disabled: React.FC = () => {
  return (
    <StyledInput disabled={true}/>
  )
};

export const ErrorAndDisabled: React.FC = () => {
  return (
    <StyledInput disabled={true} hasError={true}/>
  )
};