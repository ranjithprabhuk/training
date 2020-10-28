import React from 'react';
import { ButtonBase } from './ButtonBase';

export default {
  title: 'Button Base',
  component: ButtonBase
};


export const  Primary: React.FC = () => {
  return (
    <ButtonBase>
      Primary
    </ButtonBase>
  )
};

export const Secondary: React.FC = () => {
  return (
    <ButtonBase>
      Secondary
    </ButtonBase>
  )
};

export const Tertiary: React.FC = () => {
  return (
    <ButtonBase>
      Tertiary
    </ButtonBase>
  )
};