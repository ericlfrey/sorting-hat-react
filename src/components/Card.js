import React from "react";

const Card = (props) => {
  const editCard = () => {
    console.log('Edit Butttt');
  }
  const expelStudent = () => {
    console.log('Expell yo asss');

  }
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{props.house}</h6>
        <button className="card-link btn btn-dark" onClick={editCard}>Edit</button>
        <button className="card-link btn btn-dark" onClick={expelStudent}>Expel</button>
      </div>
    </div>
  )
}

export default Card;
