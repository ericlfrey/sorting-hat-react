import React from 'react';
import Card from './Card';

const Camp = (props) => {
  const { className, heading, arr, expelStudent, getStudent } = props;
  return (
    <div className={`camp-container ${className}`}>
      <h3>{heading}</h3>
      <div className={`camp ${className}`}>
        {props.arr.map(item =>
          <Card
            key={item.id}
            name={item.name}
            house={item.house}
            id={item.id}
            arr={arr}
            expelStudent={expelStudent}
            getStudent={getStudent}
          />
        )}
      </div>
    </div>
  )
}

export default Camp;
