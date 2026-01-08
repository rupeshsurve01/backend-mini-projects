const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.send("Hello oo")
})

app.get('/profile',(req,res)=>{
    res.send("Welcome to Profile Page")
})
app.listen(3000)