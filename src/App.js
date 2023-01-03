import React, { useState } from 'react';
import WelcomePage from './components/WelcomePage/WelcomePage';
import Header from './components/Header';
import SortButtons from './components/SortButtons/SortButtons';
import NewStudent from './components/NewStudent/NewStudent';
import sampleStudents from './sampleData'
import EditForm from './components/EditForm/EditForm';
import Camps from './components/Camps/Camps';
import { hogwartsStudents, voldemortsArmy } from './helpers';

const App = () => {

  const [students, setStudents] = useState(sampleStudents);
  const studentsCopy = [...students];
  const [hogwarts, setHogwarts] = useState(hogwartsStudents(students));
  const [voldemorts, setVoldemorts] = useState(voldemortsArmy(students));
  const [singleStudent, setSingleStudent] = useState(studentsCopy[0]);
  const [show, setShow] = useState(true);

  const updateStudentArrays = (arr) => {
    setStudents(arr);
    setHogwarts(hogwartsStudents(arr));
    setVoldemorts(voldemortsArmy(arr));
  }

  return (
    <div className="main">
      {show ?
        <WelcomePage setShow={setShow} show={show} /> :
        <>
          <Header />
          <NewStudent
            studentsCopy={studentsCopy}
            updateStudentArrays={updateStudentArrays} />
          <EditForm
            student={singleStudent}
            setSingleStudent={setSingleStudent}
            updateStudentArrays={updateStudentArrays}
            studentsCopy={studentsCopy} />
          <SortButtons
            studentsCopy={studentsCopy}
            updateStudentArrays={updateStudentArrays}
            setHogwarts={setHogwarts} />
          <Camps
            hogwarts={hogwarts}
            voldemorts={voldemorts}
            studentsCopy={studentsCopy}
            updateStudentArrays={updateStudentArrays}
            setSingleStudent={setSingleStudent} />
        </>
      }
    </div>
  );
}

export default App;
