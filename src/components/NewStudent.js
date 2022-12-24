import React, { useState } from 'react';
import { rando, houses } from '../helpers';

const NewStudent = ({ studentsCopy, setHouses }) => {
  const [name, setName] = useState('');

  const handleNameInputChange = (e) => {
    setName(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const student = {
      id: Date.now(),
      name,
      house: rando(houses),
      isStudent: true
    }
    studentsCopy.push(student);
    setHouses(studentsCopy);
    e.target.reset()
  }

  return (
    <div className="new-student mb-3">
      <form className="add-student" onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="text"
            onChange={handleNameInputChange}
            placeholder='Enter Student Name'
            className='student-name form-control form-control-sm'
            required='required'
          />
          <button className='btn btn-sm btn-dark' type='submit'>Add New Student</button>
        </div>
      </form>
    </div>
  )
}

export default NewStudent;
