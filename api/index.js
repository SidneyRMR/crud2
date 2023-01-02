import express from "express"
import userRoutes from "./routes/acessos"
import cors from "cors"

const app = express()

app.use(express.json())
app.use(cors())

// rotas para acessar api pelo navegador ou front-end
// /usuarios - lê tabela tb_usuarios
// /produtos - lê tabela tb_produtos
// /formas - lê tabela tb_formas
app.use("/", userRoutes)

//define em que porta que será disponibilizado a api da consulta/query
const port = 8800
app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })