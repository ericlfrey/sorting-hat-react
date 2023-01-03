import React from "react";
import CardImage from './CardImage'
import './card.css'

const Card = ({ house, id, name, studentsCopy, updateStudentArrays, camp, setSingleStudent }) => {
  const student = studentsCopy.find(item => item.id === id);

  const expelStudent = () => {
    student.isStudent = false;
    updateStudentArrays(studentsCopy);
  }
  const editStudent = () => {
    setSingleStudent(student);
  }
  const deleteStudent = () => {
    studentsCopy.splice(studentsCopy.indexOf(student), 1);
    updateStudentArrays(studentsCopy);
  }

  return (
    <div className="card">
      <div className={`card-img-container ${camp === 'hogwarts' ? `${house}-img-container` : 'voldemort-img-container'}`}>
        <CardImage camp={camp} house={house} />
      </div>
      <div className={`card-body ${camp === 'hogwarts' ? `${house}-card` : 'voldemort-card'}`}>
        <h5 className='card-title'>{name}</h5>
        {camp === 'hogwarts' ? <h6 className='card-subtitle mb-2'>{house}</h6> : ''}
        <div className="card-btn-container">
          <button className={`card-link btn btn-sm ${camp === 'hogwarts' ? `${house}-btn` : 'btn-dark'}`} onClick={editStudent} value={id} data-bs-toggle="modal" data-bs-target="#editModal">Edit</button>
          {camp === 'hogwarts' ? <button className={`card-link btn btn-sm ${house}-btn`} onClick={expelStudent} value={id}>Expel</button>
            : <button className={`card-link btn btn-sm btn-dark`} onClick={deleteStudent} value={id}>Delete</button>}
        </div>
      </div>
    </div>
  )
}

export default Card;
