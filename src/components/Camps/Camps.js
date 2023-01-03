import React from 'react';
import Camp from '../Camp/Camp';
import './camps.css'

const Camps = ({ hogwarts, voldemorts, updateStudentArrays, studentsCopy, setSingleStudent }) => {
  return (<div className="camps">
    <Camp
      arr={hogwarts}
      className={'hogwarts'}
      heading={'Hogwarts Students'}
      key={'hogwarts'}
      updateStudentArrays={updateStudentArrays}
      studentsCopy={studentsCopy}
      setSingleStudent={setSingleStudent}
    />
    <Camp
      arr={voldemorts}
      className={'voldemorts'}
      heading={`Voldemort's Army`}
      key={'voldemorts'}
      updateStudentArrays={updateStudentArrays}
      studentsCopy={studentsCopy}
      setSingleStudent={setSingleStudent}
    />
  </div>)
}

export default Camps;
