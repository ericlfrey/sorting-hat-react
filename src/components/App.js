import React, { useState } from 'react';
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
  const [singleStudent, setSingleStudent] = useState({});

  const setHouses = (arr) => {
    setStudents(arr);
    setHogwarts(hogwartsStudents(arr));
    setVoldemorts(VoldemortsArmy(arr));
  }
  const getStudent = (e) => {
    const student = studentsCopy.find(item => item.id === Number(e.target.value));
    setSingleStudent(student);
  }

  return (
    <div className="main">
      <Header />
      <NewStudent studentsCopy={studentsCopy} setHouses={setHouses} />
      <EditForm student={singleStudent} studentsCopy={studentsCopy} setHouses={setHouses} />
      <SortButtons studentsCopy={studentsCopy} setHouses={setHouses} setHogwarts={setHogwarts} />
      <Camps hogwarts={hogwarts} voldemorts={voldemorts} studentsCopy={studentsCopy} setHouses={setHouses} getStudent={getStudent} />
    </div>
  );
}

export default App;
