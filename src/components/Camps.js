import React from 'react';
import Camp from './Camp';

const Camps = ({ hogwarts, voldemorts, studentsCopy, setHouses, getStudent }) => {
  return (<div className="camps">
    <Camp
      arr={hogwarts}
      className={'hogwarts'}
      heading={'Hogwarts Students'}
      key={'hogwarts'}
      studentsCopy={studentsCopy}
      setHouses={setHouses}
      getStudent={getStudent}
    />
    <Camp
      arr={voldemorts}
      className={'voldemorts'}
      heading={`Voldemort's Army`}
      key={'voldemorts'}
      getStudent={getStudent}
      studentsCopy={studentsCopy}
    />
  </div>)
}

export default Camps;
