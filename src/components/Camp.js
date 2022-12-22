import React from 'react';
import Card from './Card';

const Camp = (props) => {
  return (
    <div className={props.className}>
      {props.arr.map(item =>
        <Card
          key={item.id}
          name={item.name}
          house={item.house}
        />
      )}
    </div>
  )
}

export default Camp;
