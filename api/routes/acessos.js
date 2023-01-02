import express from "express";
import { getUsers, addUser, updateUser, deleteUser } from "../controllers/usuario";
import { getProducts, addProducts, deleteProducts } from "../controllers/produto";
import { getFormas } from "../controllers/formas";

const router = express.Router()

// gerencia a rota em que será carregado os valores consultados do db
// usa o metod get, requerimento

//rotas para users
router.get("/usuarios", getUsers)
router.post("/usuarios", addUser)
router.put("/usuarios/:id", updateUser)
router.delete("/usuarios/:id", deleteUser)

// rotas para produtos
router.get("/produtos", getProducts)
router.post("/produtos", addProducts)
router.delete("/produtos/:id", deleteProducts)



router.get("/formas", getFormas)

export default router