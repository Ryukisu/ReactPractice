function AddStudentForm() {
    return (
        <form>
            <label>Add Student</label>
            <input type="text" placeholder="Name"/>
            <input type="text" placeholder="Surname"/>
            <input type="text" placeholder="Grades"/>
            <button>Add</button>
        </form>
    )
}

export default AddStudentForm