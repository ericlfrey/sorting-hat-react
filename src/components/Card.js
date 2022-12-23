import React from "react";

const Card = ({ house, id, name, getStudent, expelStudent, }) => {
  return (
    <div className="card">
      <div className={`card-body ${house}--bg`}>
        <h5 className={`card-title ${house}--text`}>{name}</h5>
        <h6 className={`card-subtitle mb-2 ${house}--text`}>{house}</h6>
        <button className="card-link btn btn-dark btn-sm" onClick={getStudent} value={id} data-bs-toggle="modal" data-bs-target="#editModal">Edit</button>
        <button className="card-link btn btn-dark btn-sm" onClick={expelStudent} value={id}>Expel</button>
      </div>
    </div>
  )
}

export default Card;
