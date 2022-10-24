import { CreatePool } from "../utils/server.js";
const con = await CreatePool();

export class Post{
    constructor(id_postagem, id_autor, tipo, titulo, texto, img ){
        if(id_postagem == '' || id_postagem == null || id_postagem == undefined){
            this.id_postagem = ''
        }else{
            this.id_postagem = id_postagem
        }

        if(id_autor == '' || id_autor == null || id_autor == undefined){
            this.id_autor = ''
        }else{
            this.id_autor = id_autor
        }

        if(tipo == '' || tipo == null || tipo == undefined){
            this.tipo = ''
        }else{
            this.tipo = tipo 
        }

        if(titulo == '' || titulo == null || titulo == undefined){
            this.titulo = ''
        }else{
            this.titulo = titulo
        }

        if(texto == '' || texto == null || texto == undefined){
            this.texto = ''
        }else{
            this.texto = texto
        }

        if(img == '' || img == null || img == undefined){
            this.img = ''
        }else{
            this.img = img
        }
    }

    static async Get(){
        try {
            const { recordset } = await con.query('select * from postagem')
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
            const { rowsAffected } = con.query(`insert into postagem values ('${this.id_autor}',
            '${this.tipo}', '${this.titulo}', '${this.texto}', '${this.img}', 1)`)
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
            const { rowsAffected } = await con.query(`update usuarios set id_autor = '${this.id_autor}' , 
            tipo = '${this.tipo}', titulo = '${this.titulo}', texto = '${this.texto}', 
            img = '${this.img}', where id_user = ${this.id_user}`)
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
            const { rowsAffected } = await con.query(`delete from postagem where id_postagem = ${this.id_postagem}`)
            return rowsAffected
        } 
        catch (error) 
        {
            console.log('error model ' + error)
            return (error)
        }
    }
}