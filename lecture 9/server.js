const express=require("express")

const app=express()

const PORT=3000
const users=[
    {id:1, name:"Devendra", email:"GZDlC@example.com"},
    {id:2, name:"Ravi", email:"ravi@com"},
    {id:3, name:"alex", email:"alex@com"},
    {id:4, name:"vasu", email:"vasu@com"},
]

app.get("/",(req,res)=>{
    res.send("Hello World")
})

app.get("/users",(req,res)=>{
    res.json(users)
})

app.listen(PORT,()=>console.log("server is running on 3000"))