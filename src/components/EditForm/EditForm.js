import React, { useState, useEffect } from 'react';
import { houses } from '../../helpers';
import './edit-form.css'

const EditForm = ({ student, setSingleStudent, updateStudentArrays, studentsCopy }) => {
  const [name, setName] = useState(student.name);
  const [house, setHouse] = useState(student.house);
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
    setSingleStudent(student);
    updateStudentArrays(studentsCopy)
  }

  return (
    <div className="modal fade" id="editModal" tabIndex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="editModalLabel">{student.isStudent ? 'Edit Student' : 'Edit Death Eater'}</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <form onSubmit={handleSubmit} value={student.id}>
            <div className="modal-body">
              <input
                className="form-control form-control-sm edit-name"
                type="text"
                value={name}
                onChange={handleNameChange}
              />
              {student.isStudent ?
                <select className="form-select" value={house} onChange={handleHouseSelect}>
                  {houses.map(item => <option value={item} key={item}>{item}</option>)}
                </select> : ''
              }
            </div>
            <div className="modal-footer">
              <button type="submit" className="btn btn-sm submit-btn" data-bs-dismiss="modal">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default EditForm;
