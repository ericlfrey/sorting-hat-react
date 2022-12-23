import React, { useState } from 'react';
import Header from './Header';
import SortButtons from './SortButtons';
import NewStudent from './NewStudent';
import sampleStudents from '../sampleData'
import Camp from './Camp';
import EditForm from './EditForm';

const App = () => {
  const [students, setStudents] = useState(sampleStudents);
  const studentsCopy = [...students];
  const [hogwarts, setHogwarts] = useState(students.filter(item => item.isStudent));
  const [voldemorts, setVoldemorts] = useState(students.filter(item => !item.isStudent));
  const [singleStudent, setSingleStudent] = useState({});

  const hogwartsStudents = studentsCopy.filter(item => item.isStudent);
  const voldemortsArmy = studentsCopy.filter(item => !item.isStudent);

  const addStudent = (student) => {
    studentsCopy.push(student);
    setStudents(studentsCopy);
    setHogwarts(studentsCopy.filter(item => item.isStudent));
  }
  const sortHouse = (e) => {
    if (e.target.value.includes('All')) {
      setHogwarts(students.filter(item => item.isStudent));
    } else {
      const filteredStudents = studentsCopy.filter(student => student.isStudent && student.house === e.target.value);
      setHogwarts(filteredStudents);
    }
  }
  const expelStudent = (e) => {
    const student = studentsCopy.find(item => item.id === Number(e.target.value));
    student.isStudent = false;
    setHogwarts(hogwartsStudents);
    setVoldemorts(voldemortsArmy);
  }
  const getStudent = (e) => {
    const student = studentsCopy.find(item => item.id === Number(e.target.value));
    setSingleStudent(student);
  }
  const editStudent = () => {
    setHogwarts(hogwartsStudents);
    setVoldemorts(voldemortsArmy);
  }

  return (
    <div className="main">
      <Header />
      <NewStudent addStudent={addStudent} />
      <EditForm student={singleStudent} editStudent={editStudent} />
      <SortButtons sortHouse={sortHouse} />
      <div className="camps">
        <Camp
          arr={hogwarts}
          className={'hogwarts'}
          heading={'Hogwarts Students'}
          key={'hogwarts'}
          expelStudent={expelStudent}
          getStudent={getStudent}
        />
        <Camp
          arr={voldemorts}
          className={'voldemorts'}
          heading={`Voldemort's Army`}
          key={'voldemorts'}
          getStudent={getStudent}
        />
      </div>
    </div>
  );
}

export default App;
