import React from 'react';
import Card from './Card';

const Camp = ({ className, heading, arr, studentsCopy, setHouses, setSingleStudent }) => {
  return (
    <div className={`camp-container ${className} mt-3`}>
      <h3 className='mb-3 heading'>{heading}</h3>
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
            setSingleStudent={setSingleStudent}
          />
        )}
      </div>
    </div>
  )
}

export default Camp;
