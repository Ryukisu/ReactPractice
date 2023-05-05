function StudentsList({students}) {

    // const calculateAverage = (grades) => {
    //     const sum = grades.reduce((accumulator, currentValue) => accumulator + currentValue);
    //     return (sum / grades.length).toFixed(2);
    // };

    return (
    <div className="studentsData">
    <label>Students</label>
    <ul>
    {students.map((student) => (
        <li key={student.id}>
        <p>
            {student.name} {student.surname}
        </p>
        <div>
            {student.grades}
        </div>
        </li>
    ))}
    </ul>
    </div>

    )

}

export default StudentsList