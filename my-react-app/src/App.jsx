import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [grades, setGrades] = useState('');

  const [students, setStudents] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const gradesArray = grades.split(',').map(parseFloat);
    const averageGrade = gradesArray.reduce((total, grade) => total + grade, 0) / gradesArray.length;

    const newStudent = {
      name,
      surname,
      grades: gradesArray,
      averageGrade,
    };

    setStudents([...students, newStudent]);

    setName('');
    setSurname('');
    setGrades('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Imię:
            <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
          </label>
        </div>
        <div>
          <label>
            Nazwisko:
            <input type="text" value={surname} onChange={(event) => setSurname(event.target.value)} />
          </label>
        </div>
        <div>
          <label>
            Oceny (oddzielone przecinkami):
            <input type="text" value={grades} onChange={(event) => setGrades(event.target.value)} />
          </label>
        </div>
        <button type="submit">Dodaj ucznia</button>
      </form>
      <h2>Lista uczniów</h2>
      <ul>
        {students.map((student, index) => (
          <li key={index}>
            {student.name} {student.surname}, średnia ocen: {student.averageGrade}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
