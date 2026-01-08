const express = require('express')
const app = express()

app.get("/",(req,res)=>{
    res.send("Helloo")
})

app.get("/profile",(req,res,next)=>{
    return next(new Error("Something Went Wrong"))
})

app.use((err,req,res,next)=>{
    console.error(err.stack)
    res.status(500).send('Somthing Broke')
})

app.listen(3000)