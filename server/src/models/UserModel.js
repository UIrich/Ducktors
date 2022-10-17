import { CreatePool } from "../utils/server.js";
const connection = await CreatePool();

export class User{
    constructor(id_user, nick, email, senha, nivel, stat){
        this.id_user = id_user,
        this.nick = nick,
        this.email = email,
        this.senha = senha,
        this.nivel = nivel,
        this.stat = stat
    };

    static async Select(){
        try{
            const {recordsets} = await connection.query(`SELECT * FROM user ORDER BY id_user`)

            if(recordsets[0] != ''){
                return recordsets[0];
            }
        }
        catch(err){
            console.log(`Error to select 'user' located on model: ${err}`)
            await connection.close();
            return false;
        }
    }

    static async Insert(nick, email, senha, nivel, stat){
        try{
            const { rowsAffected } = await connection.query(`INSERT INTO USER VALUES('${nick}', ${email}, 
            '${senha}', ${nivel}, ${stat})`)
            if(rowsAffected[0] == 1){
                return new User(nick, email, senha, nivel, stat);
            }
            else{
                return false;
            }
        }
        catch(err){
            console.log(`Error to insert 'user' located on model: ${err}`)
            await connection.close();
            return false;
        }
    }

    static async Update(id_user, nick, email, senha, nivel, stat){
        try{
            const { rowsAffected } = await connection.query(`UPDATE USER SET NICK = '${nick}', EMAIL = '${email}', 
            SENHA = '${senha}', NIVEL = ${nivel}, STAT = ${stat} WHERE id_user = ${id_user}`)
            return rowsAffected;
        }
        catch(err){
            console.log(`Error on update 'user' located on model: ${err}`)
            await connection.close();
            return false;
        }
    }

    static async Delete(id_user){
        try{
            const { rowsAffected } = await connection.query(`DELETE FROM USER WHERE id_user = ${id_user}`)
            return rowsAffected;
        }
        catch(err){
            console.log(`Error to delete 'user' located on model: ${err}`)
            await connection.close();
            return false;
        }
    }

    async Login(){
        try {
            const { recordset } = await con.query(`SELECT * FROM id_user 
                WHERE email = '${this.email}' and senha = ${this.senha} and status = 1`)
            if (recordset.length > 0)
                return recordset
            else
                return false
        } 
        catch (error) 
        {
            console.log('Model error ' + error)
            return error
        }
    }
};