const express = require('express')
const app = express()

const PORT = 4000

const handleListening = () => {
    console.log(`Listening on: http://localhost:${4000}`)
}
function handleHome(req, res) {
    res.send("Hi from home!!")
}

function handleProfile(req, res) {
    res.send("handle Profile")
}
app.get("/", handleHome)

app.get("/profile", handleProfile)

app.listen(PORT,handleListening)