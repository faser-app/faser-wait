const express = require("express")
const fs = require("fs")

const app = express()
const port = 3100

app.get("/background", (req, res) => {
    res.send(fs.readFileSync("faser_logo_long.png"))
})

app.get("/login", (req, res) => {
    res.send(fs.readFileSync("login.html", "utf8"))
})

app.get("/register", (req, res) => {
    res.send(fs.readFileSync("register.html", "utf8"))
})

app.get("/account", (req, res) => {
    res.send(fs.readFileSync("account.html", "utf8"))
})

app.get("/*", (req, res) => {
    res.send(fs.readFileSync("index.html", "utf8"))
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})