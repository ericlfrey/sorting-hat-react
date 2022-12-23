import React from 'react';
import Card from './Card';

const Camp = (props) => {
  return (
    <div className={`camp-container ${props.className}`}>
      <h3>{props.heading}</h3>
      <div className={` camp ${props.className}`}>
        {props.arr.map(item =>
          <Card
            key={item.id}
            name={item.name}
            house={item.house}
            id={item.id}
            arr={props.arr}
            expelStudent={props.expelStudent}
            getStudent={props.getStudent}
          />
        )}
      </div>
    </div>
  )
}

export default Camp;
