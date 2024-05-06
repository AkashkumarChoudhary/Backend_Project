import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()


// use ek method hai jisse hum middleware or configuration ke liye ata hai
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials  :true
}))

app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())
export {app}