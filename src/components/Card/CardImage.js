import React from 'react'
import Gryffindor from '../../media/Gryffindor.png';
import Slytherin from '../../media/Slytherin.png';
import Ravenclaw from '../../media/Ravenclaw.png';
import Hufflepuff from '../../media/Hufflepuff.png';
import deaathEater from '../../media/deathEater.png'

const CardImage = ({ camp, house }) =>
  camp === 'voldemorts' ? <img src={deaathEater} alt='Death Eather crest' className='card-image' />
    : house === 'Gryffindor' ? <img src={Gryffindor} alt='Gryffindor crest' className='card-image' />
      : house === 'Slytherin' ? <img src={Slytherin} alt='Slytherin crest' className='card-image' />
        : house === 'Ravenclaw' ? <img src={Ravenclaw} alt='Ravenclaw crest' className='card-image' />
          : <img src={Hufflepuff} alt='Hufflepuff crest' className='card-image' />

export default CardImage;
