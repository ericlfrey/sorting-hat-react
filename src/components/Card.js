import React from "react";

const Card = (props) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{props.house}</h6>
        <button className="card-link btn btn-dark btn-sm" onClick={props.getStudent} value={props.id} data-bs-toggle="modal" data-bs-target="#editModal">Edit</button>
        <button className="card-link btn btn-dark btn-sm" onClick={props.expelStudent} value={props.id}>Expel</button>
      </div>
    </div>
  )
}

export default Card;
