import React from 'react';
import { render } from '@testing-library/react';

import { Counter } from './Counter';
import userEvent from '@testing-library/user-event';

describe('Counter component', () => {

  test('verify the initial counter value', () => {
    const mockFuntion = jest.fn();
    const { getByTestId } = render(<Counter />);
    expect(Number(getByTestId('counter-value').innerHTML)).toEqual(0);
  });

  test('verify the increment functionality', () => {
    const { getByTestId } = render(<Counter />);
    const incrementButton = getByTestId('increment');
    incrementButton.click();
    incrementButton.click();
    incrementButton.click();
    incrementButton.click();

    expect(Number(getByTestId('counter-value').innerHTML)).toEqual(4);
  });

  test('verify the decrement functionality', () => {
    const { getByTestId } = render(<Counter />);
    const decrementButton = getByTestId('decrement');
    decrementButton.click();
    decrementButton.click();
    decrementButton.click();
    decrementButton.click();

    expect(Number(getByTestId('counter-value').innerHTML)).toEqual(-4);
  });

  test('verify both increment and decrement functionality', () => {
    const { getByTestId } = render(<Counter />);
    const incrementButton = getByTestId('increment');
    const decrementButton = getByTestId('decrement');
    incrementButton.click();
    decrementButton.click();
    incrementButton.click();
    incrementButton.click();

    expect(Number(getByTestId('counter-value').innerHTML)).toEqual(2);
  });

  test('verify both increment and decrement functionality', () => {
    const { getByTestId } = render(<Counter />);
    const incrementButton = getByTestId('increment');
    const decrementButton = getByTestId('decrement');
    
    userEvent.click(incrementButton);
    userEvent.click(decrementButton);

    expect(Number(getByTestId('counter-value').innerHTML)).toEqual(0);
  });

  test('verify both increment and decrement functionality', () => {
    const { getByTestId } = render(<Counter />);
    const incrementButton = getByTestId('increment');
    const decrementButton = getByTestId('decrement');
    
    userEvent.click(incrementButton);
    userEvent.click(decrementButton);

    expect(Number(getByTestId('counter-value').innerHTML)).toEqual(0);
  });

  test('verify both increment and decrement functionality', () => {
    const { getByTestId } = render(<Counter />);
    const incrementButton = getByTestId('increment');
    const decrementButton = getByTestId('decrement');
    
    userEvent.click(incrementButton);
    userEvent.click(decrementButton);

    expect(Number(getByTestId('counter-value').innerHTML)).toEqual(0);
  });

  test('verify both increment and decrement functionality', () => {
    const { getByTestId } = render(<Counter />);
    const incrementButton = getByTestId('increment');
    const decrementButton = getByTestId('decrement');
    
    userEvent.click(incrementButton);
    userEvent.click(decrementButton);

    expect(Number(getByTestId('counter-value').innerHTML)).toEqual(0);
  });

  test('verify both increment and decrement functionality', () => {
    const { getByTestId } = render(<Counter />);
    const incrementButton = getByTestId('increment');
    const decrementButton = getByTestId('decrement');
    
    userEvent.click(incrementButton);
    userEvent.click(decrementButton);

    expect(Number(getByTestId('counter-value').innerHTML)).toEqual(0);
  });

  test('verify both increment and decrement functionality', () => {
    const { getByTestId } = render(<Counter />);
    const incrementButton = getByTestId('increment');
    const decrementButton = getByTestId('decrement');
    
    userEvent.click(incrementButton);
    userEvent.click(decrementButton);

    expect(Number(getByTestId('counter-value').innerHTML)).toEqual(0);
  });
});