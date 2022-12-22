import React, { useState } from 'react';
import Header from './Header';
import SortButtons from './SortButtons';
import NewStudent from './NewStudent';
import sampleStudents from '../sampleData'
import Camp from './Camp';

const App = () => {
  const [students, setStudents] = useState(sampleStudents);
  const [hogwarts, setHogwarts] = useState(students.filter(item => item.isStudent));
  const [voldemorts, setVoldemorts] = useState(students.filter(item => !item.isStudent));

  const addStudent = (student) => {
    const studentsCopy = [...students];
    studentsCopy.push(student);
    setStudents(studentsCopy);
    setHogwarts(studentsCopy.filter(item => item.isStudent))
  }
  const sortHouse = (e) => {
    if (e.target.value === 'All') {
      setHogwarts(students.filter(item => item.isStudent));
    } else {
      const studentsCopy = [...students];
      const filteredStudents = studentsCopy.filter(student => student.isStudent && student.house === e.target.value)
      setHogwarts(filteredStudents)
    }
  }

  return (
    <div className="main">
      <Header />
      <NewStudent addStudent={addStudent} />
      <SortButtons sortHouse={sortHouse} />
      <div className="camps">
        <Camp
          arr={hogwarts}
          className={'hogwarts camp'}
          key={'hogwarts'}
        />
        <Camp
          arr={voldemorts}
          className={'voldemorts camp'}
          key={'voldemorts'}
        />
      </div>
    </div>
  );
}

export default App;
