import { CreatePool } from "../../database.js";
const connection = await CreatePool();

export class User{
    constructor(id_user, nick, email, senha, nivel, avatar, stat){
        this.id_user = id_user,
        this.nick = nick,
        this.email = email,
        this.senha = senha,
        this.nivel = nivel,
        this.avatar = avatar,
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
            console.log(`Error on select 'user': ${err}`)
            await connection.close();
            return false;
        }
    }

    static async Insert(nick, email, senha, nivel, stat, avatar){
        try{
            const { rowsAffected } = await connection.query(`INSERT INTO USER VALUES('${nick}', ${email}, 
            '${senha}', ${nivel}, ${stat}, '${avatar}'')`)
            if(rowsAffected[0] == 1){
                return new User(nick, email, senha, nivel, stat, avatar);
            }
            else{
                return false;
            }
        }
        catch(err){
            console.log(`Error on insert 'user': ${err}`)
            await connection.close();
            return false;
        }
    }

    static async Update(id_user, nick, email, senha, nivel, stat, avatar){
        try{
            const { rowsAffected } = await connection.query(`UPDATE USER SET NICK = '${nick}', EMAIL = '${email}', 
            SENHA = '${senha}', NIVEL = '${nivel}', STAT = '${stat}', AVATAR = ${avatar} WHERE id_user = '${id_user}`)
            return rowsAffected;
        }
        catch(err){
            console.log(`Error on update 'user': ${err}`)
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
            console.log(`Error on delete 'user': ${err}`)
            await connection.close();
            return false;
        }
    }
};