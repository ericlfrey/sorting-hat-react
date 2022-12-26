import React from 'react';
import Button from "./Button";
import sortingHat from '../media/sortingHat.png'

const WelcomePage = ({ setShow, show }) => {

  const enter = () => {
    setShow(!show)
  }

  return (
    <div className='welcome-page'>
      <h1>Welcome to Hogwarts</h1>
      <img src={sortingHat} alt="" className='welcome-hat' />
      <br />
      <Button className='welcome-btn' onClick={enter} text='Enter' />
    </div>
  )
}

export default WelcomePage;
