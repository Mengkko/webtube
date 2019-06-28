import "./db"
import app from './app.js'
import dotenv from 'dotenv'
dotenv.config()
import "./models/Video"
import "./models/Comment"

const PORT = process.env.PORT

const handleListening = () => console.log(`Listening on: http://localhost:${PORT}`)

app.listen(PORT, handleListening)