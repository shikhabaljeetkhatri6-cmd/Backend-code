const express=require('express');
const mongoose=require('mongoose');
const Student=require('./model/students.model');
const app=express();
const port=3000;

app.get("/api/students" ,async(req, res)=>{
    try{
        const students=await Student.find();
        res.json(students);
    }catch(err){
        res.status(500).json({success:false, message:err.message});
    }
})

mongoose.connect('mongodb://localhost:27017/UniversityDB').then(()=> {
    console.log('Connected to MongoDB');
}).catch((err)=>{
    console.error('Error connecting to MongoDB', err);
})
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})