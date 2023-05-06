function StudentsList({students}) {
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