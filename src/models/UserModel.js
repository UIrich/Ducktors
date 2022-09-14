import { CreatePool } from "../../server/database.js";
const connection = await CreatePool();

export class User{
    constructor(id_user, nick, email, senha, nivel, avatar, stat){
        this.id = id_user,
        this.nick = nick,
        this.email = email,
        this.senha = senha,
        this.nivel = nivel,
        this.avatar = avatar,
        this.stat = stat
    };

    static async Select(){
        try{
            const {recordsets} = await connection.query(`SELECT * FROM User ORDER BY id_user`)

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
            const { rowsAffected } = await connection.query(`INSERT INTO USER VALUES('${nick}', ${email}, '${senha}', ${nivel}, ${stat}, '${avatar}'')`)
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

};