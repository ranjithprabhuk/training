import React from 'react';

interface Props {
  name: string;
  withBorder?: boolean;
}

export const DisplayName: React.FC<Props> = (props: Props) => {
  return (
    <div style={{border: props.withBorder ? '1px solid #ddd' : '0px'}}>
      {props.name}
    </div>
  )
};

