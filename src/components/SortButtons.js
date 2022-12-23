import React from 'react';
import Button from './Button';
import { houses } from '../helpers';

const SortButtons = ({ sortHouse }) => {
  const housesCopy = [...houses];
  housesCopy.unshift('All')

  return (
    <div className="sort-buttons mb-3">
      {housesCopy.map(house =>
        <Button
          className={`sort-button btn btn-sm ${house}--bg ${house}--text`}
          key={house}
          onClick={sortHouse}
          text={house}
          value={house}
        />
      )}
    </div>
  )
}

export default SortButtons;
