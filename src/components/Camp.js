import React from 'react';
import Card from './Card';

const Camp = ({ className, heading, arr, studentsCopy, setHouses, getStudent }) => {
  return (
    <div className={`camp-container ${className} mt-3`}>
      <h3 className='mb-3'>{heading}</h3>
      <div className={`camp ${className}`}>
        {arr.map(item =>
          <Card
            camp={className}
            key={item.id}
            name={item.name}
            house={item.house}
            id={item.id}
            arr={arr}
            setHouses={setHouses}
            studentsCopy={studentsCopy}
            getStudent={getStudent}
          />
        )}
      </div>
    </div>
  )
}

export default Camp;
