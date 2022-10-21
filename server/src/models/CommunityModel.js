import { CreatePool } from "../utils/server.js";
const con = await CreatePool();

export class Community{
    constructor(id_comunidade, nome){
        if(id_comunidade == '' || id_comunidade == null || id_comunidade == undefined){
            this.id_comunidade = ''
        }else{
            this.id_comunidade = id_comunidade
        }

        if(nome == '' || nome == null || nome == undefined){
            this.nome = ''
        }else{
            this.nome = nome
        }
    }

    static async Get(){
        try {
            const { recordset } = await con.query('select * from comunidade')
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
            const { rowsAffected } = con.query(`insert into comunidade values ('${this.nome}', 1)`)
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
            const { rowsAffected } = await con.query(`update comunidade set nome = '${this.nome}' 
            where id_comunidade = ${this.id_comunidade}`)
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
            const { rowsAffected } = await con.query(`delete from comunidade where id_comunidade = ${this.id_comunidade}`)
            return rowsAffected
        } 
        catch (error) 
        {
            console.log('error model ' + error)
            return (error)
        }
    }
}