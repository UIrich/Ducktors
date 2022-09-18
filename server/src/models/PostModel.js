import { CreatePool } from "../../database.js";
const connection = await CreatePool();

export class Post{
    constructor(id_postagem, titulo, texto, tipo, criado, img, stat){
        this.post = id_postagem,
        this.titulo = titulo,
        this.texto = texto,
        this.tipo = tipo,
        this.criado = criado,
        this.img = img,
        this.stat = stat
    }

    static async Insert(id_postagem, titulo, texto, tipo, criado, img, stat){
        try{
            const { rowsAffected } = await connection.query(`INSERT INTO 
            postagem VALUES('${id_postagem}', ${titulo}, '${texto}', 
            '${tipo}', ${criado}, ${img}, '${stat}'')`)
            if(rowsAffected[0] == 1){
                return new Post(id_postagem, titulo, texto, tipo, criado, img, stat);
            }
            else{
                return false;
            }
        }
        catch(err){
            console.log(`Error on insert 'post': ${err}`)
            await connection.close();
            return false;
        }
    }

    static async Select(id_postagem){
        try{
            const {recordset} = await connection.query(`SELECT * FROM postagem WHERE id_postagem = ${id_postagem} and stat = 1`)

            if(recordset[0] != ''){
                return recordset[0];
            }
        }
        catch(err){
            console.log(`Error on select 'post': ${err}`)
            await connection.close();
            return false;
        }
    }

    static async Update(id_postagem, texto, tipo){
        try{
            const { recordsets } = await connection.query(`SELECT COUNT(*) AS 'find' FROM postagem where id_postagem = ${id_postagem}`);

            if(recordsets[0][0].find == 0){
                return false;
            }

            const { rowsAffected } = await connection.query(`UPDATE postagem 
            SET texto = '${texto}', tipo = '${tipo}' where postagem_id = ${id_postagem}`);
            
            if(rowsAffected[0] == 1){
                return new Post(id_postagem, texto, tipo);
            }
            else{
                return false;
            }        
        }
        catch(err){
            console.log(`Error to update 'post': ${err}`);
            await connection.close();
            return false;
        }
    }
    
    static async Delete(id_postagem){
        try{
            const { recordsets } = await connection.query(`SELECT COUNT(*) AS 'find' FROM postagem WHERE postagem_id = ${id_postagem}`);

            if(recordsets[0][0].find == 0){
                return false;
            }

            const { rowsAffected } = await connection.query(`UPDATE postagem SET stat = 0 WHERE postagem_id = ${id_postagem};`);
            if(rowsAffected[0] == 1){
                return true;
            }
            else{
                return false;
            }
        }
        catch(err){
            console.log(`Error on delete 'post': ${err}`);
            await connection.close();
            return false;
        }
    }
}