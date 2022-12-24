import React from 'react';
import Camp from './Camp';

const Camps = ({ hogwarts, voldemorts, setHouses, studentsCopy, setSingleStudent }) => {
  return (<div className="camps">
    <Camp
      arr={hogwarts}
      className={'hogwarts'}
      heading={'Hogwarts Students'}
      key={'hogwarts'}
      setHouses={setHouses}
      studentsCopy={studentsCopy}
      setSingleStudent={setSingleStudent}
    />
    <Camp
      arr={voldemorts}
      className={'voldemorts'}
      heading={`Voldemort's Army`}
      key={'voldemorts'}
      studentsCopy={studentsCopy}
      setSingleStudent={setSingleStudent}
    />
  </div>)
}

export default Camps;
