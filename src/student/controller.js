const queries = require('./queries');
const pool = require("../../db");
const {
  getStudentsQuery,
  getStudentQueryByID,
  checkEmailExists,
  addStudentQuery,
  deleteStudentQueryByID,
} = require("./queries");

function getStudents(req, res) {
  pool.query(getStudentsQuery, (err, result) => {
    if (err) {
      return res.status(404).json({
        msg: "wrong input",
      });
    }
    res.status(200).json(result.rows);
  });
}

function deleteStudentById(req,res){
    pool.query(queries.deleteStudentQueryByID,[req.params.id],(err,result)=>{
        if(err){
            return res.status(404).json({
                msg:"Wrong input",
            })
        }
        res.status(200).json({
            msg:"User successfully deleted!!",
        })
    })
}

function getStudentsById(req, res) {
 pool.query(getStudentQueryByID(req.params.id), (err, result) => {
    console.log(req.params.id);
    if (err) {
      console.log(err);
      return res.status(404).json({
        msg: "wrong input",
      });
    }
    res.status(200).json(result.rows);
  });
}

 function addStudent(req, res) {
  const { name, email, age, dob } = req.body;
  //check if email exists
  pool.query(queries.checkEmailExists, [email], (err, results) => {
    if (results.rows.length) {
      return res.status(400).json({
        msg:"Email alerady exists"
      })
    }
    //add student to query
    pool.query(
      queries.addStudentQuery,
      [name, email, age, dob],
      (error, result) => {
        if (error) {
          console.log(error);
          throw error;
        }
        console.log("Student created !!");
        res.status(201).json({
          msg: "Student created successfully",
        });
      }
    );
  });
}

module.exports = {
  getStudents,
  getStudentsById,
  addStudent,
  deleteStudentById,
};
