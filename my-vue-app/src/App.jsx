import { useState } from 'react'
import './App.css'
import AddStudentForm from './components/AddStudentForm'
import StudentsList from './components/StudentsList'

function App() {

  const [students, setStudents] = useState([]);

  const addStudent = (student) => {
    setStudents([...students, student]);
  };

  return (
    <>
      <div className='container'>
        <AddStudentForm onAddStudent={addStudent}/>
        <StudentsList students={students}/>
      </div>
    </>
  )
}

export default App
