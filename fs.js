const fs = require('node:fs');
const http = require('http')

// fs.writeFile("hey.txt","Hey I Am Creating This ",(err)=>{
//     if(err) console.log(err);
//     else console.log("Done")
// })

// fs.appendFile("hey.txt","From Node.js",(err)=>{
//     if(err) console.log(err);
//     else console.log("Done")
// })


const server = http.createServer(function(req,res){
    res.end("Hello World")
})
server.listen(3000)