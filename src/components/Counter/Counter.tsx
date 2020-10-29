import React, { useState } from 'react';

export const Counter: React.FC = () => {
  const [value, setValue] = useState(0);
  return (
    <div>
      Counter: <div data-testid={'counter-value'}>{value}</div>
      <div>
        <div>
          <button type="button" onClick={() => setValue(val => ++val)} data-testid={'increment'}>
            Increment
        </button>
        </div>
        <div>
          <button type="button" onClick={() => setValue(val => --val)}  data-testid={'decrement'}>
            Decrement
        </button>
        </div>
      </div>
    </div>
  )
};