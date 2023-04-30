import './App.css'
import AddStudentForm from './components/AddStudentForm'
import Students from './components/Students'

function App() {

  return (
    <>
      <div className='container'>
        <AddStudentForm />
        <Students />
      </div>
    </>
  )
}

export default App
