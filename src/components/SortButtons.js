import React from 'react';
import Button from './Button';
import { houses } from '../helpers';

const SortButtons = ({ studentsCopy, setHouses, setHogwarts }) => {
  const housesCopy = [...houses];
  housesCopy.unshift('All')

  const sortHouse = (e) => {
    if (e.target.value.includes('All')) {
      setHouses(studentsCopy);
    } else {
      const filteredStudents = studentsCopy.filter(student => student.isStudent && student.house === e.target.value);
      setHogwarts(filteredStudents);
    }
  }

  return (
    <div className="sort-buttons mb-3">
      {housesCopy.map(house =>
        <Button
          className={`sort-button btn btn-sm ${house}-btn`}
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
