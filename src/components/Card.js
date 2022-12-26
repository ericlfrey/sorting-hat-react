import React from "react";
import CardImage from './CardImage'

const Card = ({ house, id, name, studentsCopy, setHouses, camp, setSingleStudent }) => {
  const expelStudent = (e) => {
    const student = studentsCopy.find(item => item.id === Number(e.target.value));
    student.isStudent = false;
    setHouses(studentsCopy);
  }

  const editStudent = (e) => {
    const student = studentsCopy.find(item => item.id === Number(e.target.value));
    setSingleStudent(student);
  }

  return (
    <div className="card">
      <div className="card-img-container">
        <CardImage camp={camp} house={house} />
      </div>
      <div className={`card-body ${camp === 'hogwarts' ? `${house}-card` : 'voldemort-card'}`}>
        <h5 className='card-title'>{name}</h5>
        {camp === 'hogwarts' ? <h6 className='card-subtitle mb-2'>{house}</h6> : ''}
        <button className={`card-link btn btn-sm ${camp === 'hogwarts' ? `${house}-btn` : 'btn-dark'}`} onClick={editStudent} value={id} data-bs-toggle="modal" data-bs-target="#editModal">Edit</button>
        {camp === 'hogwarts' ? <button className={`card-link btn btn-sm ${house}-btn`} onClick={expelStudent} value={id}>Expel</button> : ''}
      </div>
    </div>
  )
}

export default Card;
