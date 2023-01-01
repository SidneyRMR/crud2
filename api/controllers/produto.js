import {db} from "../db"


// por ser metodo get não precisa enviar o request
export const getProducts = (_, res) => {
    const q = "SELECT * FROM tb_produtos"

    //este codigo acessa o bd.tb_usuarios e carrega os valores, caso dê erro, retorna o codigo de erro
    db.query(q, (err, data) => {
        if (err) return res.json(err)
        //em 'data' carrega a listagem de todos os usuarios
        //e retorna como resposta de quem requisitar esta api
        return res.status(200).json(data)
    })
}

export const addProducts = (req, res) => {
    const q = "INSERT INTO tb_produtos('nome', 'preco', 'medida', 'ehComida') VALUES(?)"

    const values = [
        req.body.nome,
        req.body.preco,
        req.body.medida,
        req.body.tipo,
    ]

    db.query(q, [values], (err) => {
        if(err) return res.json(err)

        return res.status(200).json('Produto criado com sucesso!')
    })
}
export const updateProducts = (req, res) => {
    const q = "UPDATE tb_produtos SET 'nome' = ?, 'preco' = ?, 'medida' = ?, 'ehComida' = ? WHERE `id` = ?"

    const values = [
        req.body.nome,
        req.body.preco,
        req.body.medida,
        req.body.ehComida,
    ]

    db.query(q, [...values, req.params.id], (err) => {
        if(err) return res.json(err)

        return res.status(200).json('Produto atualizado com sucesso!')
    })
}

export const deleteProducts = (req, res) => {
    const q = "DELETE FROM tb_produtos WHERE `id` = ?"

    db.query(q, [req.params.id], (err) => {
        if(err) return res.json(err)

        return res.status(200).json('Produto deletado com sucesso!')
    })

}
