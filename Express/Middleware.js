const express = require('express')
const app = express()

app.use((req,res,next)=>{
    console.log('middleware chala')
    next()
})

app.use((req,res,next)=>{
    console.log('middleware chala ek aur bar')
    next()
})

app.get('/',(req,res)=>{
    res.send("I am Comming From Middleware")
})

app.listen(3000)