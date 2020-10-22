import React, { useState } from 'react';

interface Props {
  name: string;
  age?: number;
}

export const Simple: React.FC<Props> = (props: Props) => {
  const [display, setDisplay] = useState<boolean>(false);

  const renderAge = () => {
    return props.age ? `, Age: ${props.age}` : null;
  };

  const toggleContent = (event, age) => {
    // setDisplay((curerntValue) => {

    //   const newValue = !curerntValue;
    //   return newValue;
    // });
    if (props.age && props.age > 20) {
      setDisplay(currentValue => !currentValue);
    }
  };

  return (
    <div>
      <div>
        <button type="button"  onClick={(event) => toggleContent(event, props.age)} onMouseOver={(event) => toggleContent(event, props.age)}>
          Toggle
        </button>
      </div>
      { display && <div>
        Name: {props.name}
        {renderAge()}
      </div>}
    </div>
  )
};

/**
 * onclick
 * onchange
 * onmouseOver
 * onmouseout
 * ondblclick
 * onblur
 *
 */