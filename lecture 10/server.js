const express= require("express")   

const app=express();

const PORT=3000

app.use(express.json());//middleware

const students=[
    {rollNo:1, name:"Abhijeet", section:"BCA-D"},
    {rollNo:2, name:"Upen", section:"BCA-D"},
    {rollNo:3, name:"Rahul", section:"BCA-D"},
    {rollNo:4, name:"Gurpreet", section:"BCA-D"},
    {rollNo:5, name:"Daulat", section:"BCA-D"}
]
////////Read Operation
app.get("/students",(req,res)=>{
    res.json(students)
})
//REad operation with id
app.get("/students/:rollNo",(req,res)=>{
    const id=req.params.rollNo;
    const student=students.find((student)=>student.rollNo===Number(id));
    if(!student){
        res.status(404).json({success:false, message:"student not found"});
    }
    res.json(student);
})

///Create

app.post("/students",(req,res)=>{
    const data=req.body;
    students.push({rollNo:students.length+1,...data});
    res.json({success:true,data});
})

//update operation
app.put("/students/:rollNo",(req,res)=>{
    const id=req.params.rollNo;
    const data=req.body;
    const student=students.find((student)=>student.rollNo===Number(id));
    if(!student){
        res.status(404).json({success:false, message:"student not found"});
    }
    student.name=data.name;
    student.section=data.section;
    res.json({success:true,student});
})

app.delete("/students/:rollNo",(req,res)=>{
    const id=req.params.rollNo;
    const studentIndex=students.findIndex((student)=>student.rollNo===Number(id));
    if(studentIndex===-1){
        res.status(404).json({success:false, message:"student not found"});
    }else{
        students.splice(studentIndex,1);
        res.json({success:true, message:"student deleted successfully"});
    }
    
})

app.listen(PORT,()=>console.log("server is running"));