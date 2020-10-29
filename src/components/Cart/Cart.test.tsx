import React from 'react';
import { render } from '@testing-library/react';


import { Cart } from './Cart';


// if(!)

// test suite
describe('Cart Component', () => {

  test('renders', () => {
    expect(() => {
      render(<Cart list={[]} />)
    }).not.toThrowError();
  });

  test('renders without display all', () => {
    const { getByText } = render(<Cart list={[]} displayAll={false} />)
    expect(getByText('Products')).toBeInTheDocument();
  });

  test('renders with all props', () => {
    const { getByText } = render(<Cart list={[]} displayAll={true} />)
    expect(getByText('Title - Price - Qty')).toBeInTheDocument();
  });

});   