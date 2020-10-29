import React, { useState } from 'react';

interface Props {
  type: 'text' | 'password' | 'number';
  value?: string;
  onValueChange?: (newValue: string, isUpdated?: boolean) => void;
}

export const InputTestId = 'input-component-test';

export const InputComponent: React.FC<Props> = (props) => {
  const [inputValue, setInputValue] = useState<string>(props.value || '');
  const name: string = 'ranjith';

  const handleInputChange = (event: React.SyntheticEvent): void => {
    event.persist();
    setInputValue((event.target as any).value);
    console.log('value after setting it', inputValue);
    props.onValueChange && props.onValueChange((event.target as any).value, true);
  };

  return (
    <div>
      <input data-testid={InputTestId} type={props.type} value={inputValue} onChange={handleInputChange} />
    </div>
  )
};