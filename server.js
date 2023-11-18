const express= require('express')
const studentRoutes = require('./src/student/routes')
const app = express()
const PORT = 8000;


app.get('/',(req,res)=>{
    res.end("hello wolrd")
})
app.use(express.json());
app.use('/api/v1/students',studentRoutes);

app.listen(PORT,()=>{
    console.log("server is listening on port 8000")
})