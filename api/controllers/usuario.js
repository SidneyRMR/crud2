import {db} from "../db"


// por ser metodo get não precisa enviar o request
export const getUsers = (_, res) => {
    const q = "SELECT * FROM tb_usuarios"

    //este codigo acessa o bd.tb_usuarios e carrega os valores, caso dê erro, retorna o codigo de erro
    db.query(q, (err, data) => {
        if (err) return res.json(err)
        //em 'data' carrega a listagem de todos os usuarios
        //e retorna como resposta de quem requisitar esta api
        return res.status(200).json(data)
    })
}

// export const getUser = (req, res) => {
//     const q = "SELECT * FROM tb_usuarios WHERE id = ?"
//     const values = [req.params.id]


//     db.query(q, values, (err, data) => {
//         if (err) return res.json(err);
//         return res.status(200).json(data);
//       });
// }

export const addUser = (req, res) => {
    const q = "INSERT INTO tb_usuarios('nome_usuario', 'login', 'senha') VALUES(?)"

    const values = [
        req.body.nome,
        req.body.login,
        req.body.senha,
    ]

    db.query(q, [values], (err) => {
        if(err) return res.json(err)

        return res.status(200).json('Usuário criado com sucesso!')
    })
}
export const updateUser = (req, res) => {
    const q = "UPDATE tb_usuarios SET 'nome_usuario' = ?, 'login' = ?, 'senha' = ? WHERE `id` = ?"

    const values = [
        req.body.nome,
        req.body.login,
        req.body.senha,
    ]

    db.query(q, [...values, req.params.id], (err) => {
        if(err) return res.json(err)

        return res.status(200).json('Usuário atualizado com sucesso!')
    })
}

export const deleteUser = (req, res) => {
    const q = "DELETE FROM tb_usuarios WHERE `id_usuario` = ?"

    db.query(q, [req.params.id_usuario], (err) => {
        if(err) return res.json(err)

        return res.status(200).json('Usuário deletado com sucesso!')
    })

}