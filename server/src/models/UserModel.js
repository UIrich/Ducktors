import { CreatePool } from "../utils/server.js";
const con = await CreatePool();

export class User{
    constructor(id_user, nick, email, senha, stat){
        if(id_user == '' || id_user == null || id_user == undefined){
            this.id_user = ''
        }else{
            this.id_user = id_user
        }

        if(nick == '' || nick == null || nick == undefined){
            this.nick = ''
        }else{
            this.nick = nick
        }

        if(email == '' || email == null || email == undefined){
            this.email = ''
        }else{
            this.email = email 
        }

        if(senha == '' || senha == null || senha == undefined){
            this.senha = ''
        }else{
            this.senha = senha
        }

        if(stat == '' || stat == null || stat == undefined){
            this.stat = 1
        }else{
            this.stat = 1
        }

    }

    static async Get(){
        try {
            const { recordset } = await con.query('select * from usuarios')
            return recordset
        } 
        catch (error)
        {
            console.log('error model ' + error)
            return error(error)
        }
    }

    async GetProfile(){
        try {
            const { recordset } = await con.query(`select id_user, nick, stat from usuarios where nick = '${this.nick}'`)
            return recordset
        } 
        catch (error)
        {
            console.log('error model ' + error)
            return error(error)
        }
    }

    async Insert(){
        try {
            const { rowsAffected } = con.query(`insert into usuarios values ('${this.email}',
            '${this.senha}','${this.nick}', ${this.stat})`)
            return true
        } 
        catch (error) 
        {
            console.log('error model ' + error)
            return (error)
        }
    }

    async Update(){
        try {
            const { rowsAffected } = await con.query(`update usuarios set nick = '${this.nick}' , 
            email = '${this.email}', senha = '${this.senha}' where id_user = ${this.id_user}`)
            return rowsAffected
        } 
        catch (error) 
        {
            console.log('error model ' + error)
            return (error)
        }
    }

    async Delete(){
        try {
            const { rowsAffected } = await con.query(`delete from usuarios where id_user = ${this.id_user}`)
            return rowsAffected
        } 
        catch (error) 
        {
            console.log('error model ' + error)
            return (error)
        }
    }

    async Login(){
        try {
            const { recordset } = await con.query(`SELECT * FROM usuarios 
                WHERE email = '${this.email}' and senha = ${this.senha} and stat = 1`)
            if (recordset.length > 0)
                return recordset
            else
                return false
        } 
        catch (error) 
        {
            console.log('error model ' + error)
            return error
        }
    }
}