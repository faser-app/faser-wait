const express = require("express")
const fs = require("fs")

const app = express()
const port = 3000

app.get("/", (req, res) => {
    res.send(fs.readFileSync("index.html", "utf8"))
})

app.get("/background", (req, res) => {
    res.send(fs.readFileSync("faser_logo_long.png"))
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})