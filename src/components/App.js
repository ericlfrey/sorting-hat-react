import React, { useState } from 'react';
import WelcomePage from './WelcomePage';
import Header from './Header';
import SortButtons from './SortButtons';
import NewStudent from './NewStudent';
import sampleStudents from '../sampleData'
import EditForm from './EditForm';
import Camps from './Camps';

const App = () => {
  const hogwartsStudents = (arr) => arr.filter(item => item.isStudent)
  const VoldemortsArmy = (arr) => arr.filter(item => !item.isStudent)

  const [students, setStudents] = useState(sampleStudents);
  const studentsCopy = [...students];
  const [hogwarts, setHogwarts] = useState(hogwartsStudents(students));
  const [voldemorts, setVoldemorts] = useState(VoldemortsArmy(students));
  const [singleStudent, setSingleStudent] = useState(studentsCopy[0]);
  const [show, setShow] = useState(true);

  const setHouses = (arr) => {
    setStudents(arr);
    setHogwarts(hogwartsStudents(arr));
    setVoldemorts(VoldemortsArmy(arr));
  }

  return (
    <div className="main">
      {show ?
        <WelcomePage setShow={setShow} show={show} /> :
        <>
          <Header />
          <NewStudent
            studentsCopy={studentsCopy}
            setHouses={setHouses} />
          <EditForm
            student={singleStudent}
            setSingleStudent={setSingleStudent}
            setHouses={setHouses}
            studentsCopy={studentsCopy} />
          <SortButtons
            studentsCopy={studentsCopy}
            setHouses={setHouses}
            setHogwarts={setHogwarts} />
          <Camps
            hogwarts={hogwarts}
            voldemorts={voldemorts}
            studentsCopy={studentsCopy}
            setHouses={setHouses}
            setSingleStudent={setSingleStudent} />
        </>
      }
    </div>
  );
}

export default App;
