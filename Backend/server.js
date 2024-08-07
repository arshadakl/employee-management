import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import connectDB from './utils/db.js'
const app = express()
dotenv.config()

const PORT = process.env.PORT || 3000;

app.use(express.json())
app.use(cors())
connectDB()

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))