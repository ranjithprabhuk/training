import React from 'react';
import { render } from '@testing-library/react';

import { InputComponent, InputTestId } from './InputComponent'
import userEvent from '@testing-library/user-event';

describe('Input Component', () => {

  test('verify the initial value', () => {
    const { getByTestId } = render(<InputComponent type={'text'} value={'init'} />);
    expect(getByTestId(InputTestId).value).toEqual('init'); 
  });

  test('verify the initial on change', () => {
    const mockOnValueChange = jest.fn();
    const { getByTestId } = render(<InputComponent type={'text'} value={'init'} onValueChange={mockOnValueChange} />);    
    expect(mockOnValueChange).not.toBeCalled();
  });

  test('validate the on change event', () => {
    const mockOnValueChange = jest.fn();
    const { getByTestId } = render(<InputComponent type={'text'} value={'init'} onValueChange={mockOnValueChange} />);

    userEvent.type(getByTestId(InputTestId), 'value', {allAtOnce: true});
    
    expect(mockOnValueChange).toBeCalled();
  });

  test('validate the on change event multiple times', () => {
    const mockOnValueChange = jest.fn();
    const { getByTestId } = render(<InputComponent type={'text'} value={'init'} onValueChange={mockOnValueChange} />);

    userEvent.type(getByTestId(InputTestId), 'value', {allAtOnce: true});
    userEvent.type(getByTestId(InputTestId), 'update', {allAtOnce: true});
    userEvent.type(getByTestId(InputTestId), 'done', {allAtOnce: true});
    
    expect(mockOnValueChange).toBeCalledTimes(3);
  });

  test('validate the value from the on vlaue changes', () => {
    const mockOnValueChange = jest.fn((newValue) => {
      expect(newValue).toEqual('updated');
    });
    const { getByTestId } = render(<InputComponent type={'text'} value={''} onValueChange={mockOnValueChange} />);

    userEvent.type(getByTestId(InputTestId), 'updated', {allAtOnce: true});
  });

  test('validate the value from the on vlaue changes', () => {
    const mockOnValueChange = jest.fn();
    const { getByTestId } = render(<InputComponent type={'text'} value={''} onValueChange={mockOnValueChange} />);

    userEvent.type(getByTestId(InputTestId), 'updateddd', {allAtOnce: true});

    expect(mockOnValueChange).toBeCalledWith('updateddd', true);
  });

  test('validate the value from the on value changes', () => {
    const mockOnValueChange = jest.fn();
    const { getByTestId } = render(<InputComponent type={'text'} value={''} onValueChange={mockOnValueChange} />);

    userEvent.type(getByTestId(InputTestId), 'updated', {allAtOnce: true});
    expect(mockOnValueChange).toBeCalledWith('updated', true);

    userEvent.type(getByTestId(InputTestId), 'sdsd', {allAtOnce: true});
    expect(mockOnValueChange).toBeCalledWith('sdsd', true);

    userEvent.type(getByTestId(InputTestId), 'srgtrtr', {allAtOnce: true});
    expect(mockOnValueChange).toBeCalledWith('srgtrtr', true);
  });


});

/**
 * rendering the component
 * rendering with all props
 * mock call back functions using jest
 */