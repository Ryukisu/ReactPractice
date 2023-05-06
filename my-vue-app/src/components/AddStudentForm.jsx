import { useState } from "react";

function AddStudentForm({onAddStudent}) {

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [grades, setGrades] = useState('');

    const [students, setStudents] = useState([]);

    const handleName = (event) => {
        setName(event.target.value);
    };

    const handleSurname = (event) => {
        setSurname(event.target.value);
    };

    const handleGradesChange = (event) => {
        setGrades(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const gradesArray = grades.split(', ').map(parseFloat);
        const averageGrade = (gradesArray.reduce((total, grade) => total + grade, 0) / gradesArray.length).toFixed(2);

        const student = {
            name,
            surname,
            grades: averageGrade,
            id: Math.floor(Math.random() * 1000),
        };
        onAddStudent(student);
        setName('');
        setSurname('');
        setGrades('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Add Student</label>
            <input 
            type="text" 
            placeholder="Name"
            value={name}
            onChange={handleName}/>
            <input 
            type="text" 
            placeholder="Surname"
            value={surname}
            onChange={handleSurname}/>
            <input 
            type="text" 
            placeholder="Grades"
            value={grades}
            onChange={handleGradesChange}/>
            <button type="submit">Add</button>
        </form>
    )
}

export default AddStudentForm