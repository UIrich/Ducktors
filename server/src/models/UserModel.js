import { CreatePool } from "../utils/server.js";
const con = await CreatePool();

export class User{
    constructor(email, senha, nick, stat, id_user){
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

        if(nick == '' || nick == null || nick == undefined){
            this.nome = ''
        }else{
            this.nome = nome
        }

        if(stat == '' || stat == null || stat == undefined){
            this.stat = 1
        }else{
            this.stat = 1
        }

        if(id_user == '' || id_user == null || id_user == undefined){
            this.id_user = ''
        }else{
            this.id_user = id_user
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
            const { recordset } = await con.query(`select nick, status, id_user from usuarios where nick = '${this.nick}'`)
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
            const { rowsAffected } = await con.query(`update usuarios set email = '${this.email}' , 
            senha = '${this.senha}', nick = '${this.nick}' where id_user = ${this.id_user}`)
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
            console.log('model error ' + error)
            return error
        }
    }
}