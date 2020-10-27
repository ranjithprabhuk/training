import React from 'react';
import styled, { css } from 'styled-components';

export const ButtonBase = styled.button<{disabled?: boolean, pad?: string, variant?: string}>`
  padding: ${(props) => props.pad ? props.pad : '10px' };
  background-color: ${(props) => props.disabled ? '#333' : '#eee' };
  color: ${(props) => props.disabled ? '#fff' : '#232323' };
  font-weight: bold;

  ${(props) => props.disabled && css`
    font-size: 12px;
    line-height: 20px;
    font-weight: 500;
    padding: 2px;
  `}

  ${(props) => props.variant && props.variant === 'primary' && css`
    background-color: #ddd;
  `}
`;