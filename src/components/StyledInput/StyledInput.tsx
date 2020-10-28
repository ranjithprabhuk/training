import React from 'react';
import styled, { css } from 'styled-components';

const InputComponent = styled.input<{hasError?: boolean}>`
  width: 250px;
  padding: 10px;
  border: 1px solid #999;
  border-radius: 4px;
  background-color: lightblue;

  ${({hasError}) => hasError && css`
    border-color: #f00;
    background-color: #fff;
  `}

  ${({disabled}) => disabled && css`
    background-color: #eee;
  `}
`;

interface Props {
  /**
   * to disable the input element
   */
  disabled?: boolean;
  /**
   * to highlight the input on error
   */
  hasError?: boolean;
}

export const StyledInput: React.FC<Props> = (props: Props) => {
  return (
    <InputComponent disabled={props.disabled} hasError={props.hasError} />
  )
};
