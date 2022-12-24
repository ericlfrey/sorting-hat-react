import React, { useState, useEffect } from 'react';
import { houses } from '../helpers';

const EditForm = ({ student, studentsCopy, setHouses }) => {
  const [name, setName] = useState(student.name);
  const [house, setHouse] = useState(name);
  useEffect(() => {
    setName(student.name);
    setHouse(student.house)
  }, [student]);
  const handleNameChange = (e) => {
    setName(e.target.value);
  }
  const handleHouseSelect = (e) => {
    setHouse(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    student.name = name;
    student.house = house;
    setHouses(studentsCopy)
  }

  return (
    <div className="modal fade" id="editModal" tabIndex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="editModalLabel">Edit Student</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="modal-body">
              <input
                className="form-control form-control-sm"
                type="text"
                defaultValue={name}
                onChange={handleNameChange}
              />
              <select
                className="form-select"
                value={house}
                onChange={handleHouseSelect}
              >
                {houses.map(item => <option value={item} key={item}>{item}</option>)}
              </select>
            </div>
            <div className="modal-footer">
              <button type="submit" className="btn btn-secondary" data-bs-dismiss="modal">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default EditForm;
