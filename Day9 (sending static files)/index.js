const express = require('express')
const app = express()
const port = 3000
const path = require('path')
// console.log(__dirname)

app.set("views", path.join(__dirname, "views"))
app.set("view engine", "jade")

app.get('/', (req, res) => {
    // res.sendFile(path.join(__dirname, "public/hello.html"), 'test.html')
    // res.send("Hello world")
    res.render('index', { title: "Exhpresh"})
})

app.get('/login', (req, res) => {
    res.status(201)
    .cookie("token", "69", {
        expire: new Date(Date.now() + 8 * 3600000)
    })
    .cookie("hello", "Hello")
    .redirect(301, "/admin")
})

app.get('/admin', (req, res) => {
    res.send("Logged In")
})

// THA
app.get('/file/:name', (req, res) => {
    // res.send(req.params.name)
    res.sendFile(path.join(__dirname, `public/${req.params.name}`))
})

app.listen(port)