const express = require('express')
const app = express()
const path = require('path')
const fs = require('fs')

app.set("view engine", "ejs")
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, "public")))

app.get('/', (req, res) => {
    fs.readdir('./files', (err, files) => {
        res.render("index", { files })
    })
})

app.get('/file/:filename', (req, res) => {
    const filename = req.params.filename

    fs.readFile(`./files/${filename}`, "utf-8", (err, filedata) => {
        if (err) {
            return res.send("File not found")
        }

        res.render('show', {
            filename: filename,
            filedata: filedata
        })
    })
})


app.post('/create', (req, res) => {
  
    fs.writeFile(`./files/${req.body.title.split(' ').join('-')}.txt`, req.body.details, () => {
        res.redirect("/")
    })
})

app.listen(3000, () => {
    console.log("Server running on port 3000")
})
