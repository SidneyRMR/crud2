import express from "express"
import userRoutes from "./routes/users"
import cors from "cors"

const app = express()

app.use(express.json())
app.use(cors())

app.use("/", userRoutes)

//define em que porta que será disponibilizado a api da consulta/query
const port = 3000
app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })