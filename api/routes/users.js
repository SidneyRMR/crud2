import express from "express";
import { getUsers } from "../controllers/user";

const router = express.Router()

// gerencia a rota em que será carregado os valores consultados do db
// usa o metod get, requerimento
router.get("/", getUsers)

export default router