
const express=require("express")
const app=express()
const connection=require("./config/db")
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Homepage")
})

app.listen(4500,async(req,res)=>{
    try{
        await connection()
        res.send("connected to db")
    }
    catch(err){
        console.log(err)
    }

    console.log("server running at port 4500")
})