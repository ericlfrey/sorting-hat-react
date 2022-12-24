import React from "react";

const Card = ({ house, id, name, getStudent, studentsCopy, setHouses, camp }) => {
  const expelStudent = (e) => {
    const student = studentsCopy.find(item => item.id === Number(e.target.value));
    student.isStudent = false;
    setHouses(studentsCopy);
  }

  return (
    <div className="card">
      <div className={`card-body ${camp === 'hogwarts' ? `${house}--bg` : 'voldemort--bg'}`}>
        <h5 className={`card-title ${camp === 'hogwarts' ? `${house}--text` : 'voldemort--text'}`}>{name}</h5>
        <h6 className={`card-subtitle mb-2 ${camp === 'hogwarts' ? `${house}--text` : 'voldemort--text'}`}>{house}</h6>
        <button className="card-link btn btn-dark btn-sm" onClick={getStudent} value={id} data-bs-toggle="modal" data-bs-target="#editModal">Edit</button>
        <button className="card-link btn btn-dark btn-sm" onClick={expelStudent} value={id}>Expel</button>
      </div>
    </div>
  )
}

export default Card;
