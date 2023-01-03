import React from 'react';
import Button from "../Button";
import sortingHat from '../../media/sortingHat.png'
import './welcomepage.css'

const WelcomePage = ({ setShow, show }) => {

  const enter = () => {
    setShow(!show)
  }

  return (
    <div className='welcome-page'>
      <h1 className='heading'>Welcome to Hogwarts</h1>
      <img src={sortingHat} alt="" className='welcome-hat' />
      <br />
      <h5 className='welcome-text'>Before classes begin, all young Witches and Wizards must be sorted into a House!</h5>
      <Button className='welcome-btn' onClick={enter} text='Enter' />
    </div>
  )
}

export default WelcomePage;
