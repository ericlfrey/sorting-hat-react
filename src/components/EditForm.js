import React, { useState } from 'react';
import { houses } from '../helpers';

const EditForm = (props) => {
  const [studentName, setStudentName] = useState('');
  const [studentHouse, setStudentHouse] = useState('');
  const initialHouse = console.log(props.student.house);

  const handleNameInputChange = (e) => {
    setStudentName(e.target.value);
  }
  const handleHouseChange = (e) => {
    setStudentHouse(e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const studentObj = {
      studentName,
      studentHouse
    }
    console.log(studentObj);
    e.target.reset();
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
                defaultValue={props.student.name}
                onChange={handleNameInputChange}
              />
              <select
                className="form-select"
                onChange={handleHouseChange}>
                {houses.map(item =>
                  <option
                    value={item}
                    key={item}
                    defaultValue={item === props.student.house}
                  >
                    {item}
                  </option>
                )}
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
