const getStudentsQuery= "SELECT * FROM students";
function getStudentQueryByID(str){
    return `SELECT * FROM students where id=${str}`;
}
const checkEmailExists = "SELECT s FROM students as s where s.email = $1";
const addStudentQuery = "INSERT INTO students (name,email,age,dob) VALUES ($1 , $2 , $3 , $4)";
const deleteStudentQueryByID = "DELETE FROM students where id = $1";
module.exports ={
    getStudentsQuery,
    getStudentQueryByID,
    checkEmailExists,
    addStudentQuery,
    deleteStudentQueryByID,
    
};