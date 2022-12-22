import React from 'react';
import Button from './Button';

const SortButtons = (props) => {
  const houses = [
    { house: 'All', className: 'secondary' },
    { house: 'Gryffindor', className: 'danger' },
    { house: 'Slytherin', className: 'success' },
    { house: 'Ravenclaw', className: 'primary' },
    { house: 'Hufflepuff', className: 'warning' }
  ]

  return (
    <div className="sort-buttons">
      {houses.map(house =>
        <Button
          className={`sort-button btn btn-sm btn-${house.className}`}
          key={house.house}
          onClick={props.sortHouse}
          text={house.house}
          value={house.house}
        />
      )}
    </div>
  )
}

export default SortButtons;
