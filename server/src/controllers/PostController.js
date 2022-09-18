import { Post } from "../models/PostModel.js";

export class PostController{
    static async Insert(req, res){
        try {
            const {id_postagem, titulo, texto, tipo} = req.body;

            if(texto == '' || texto == null || titulo == '' || titulo == null || 
            tipo == '' || tipo == null || id_postagem == '' || id_postagem == null){
                return res.status(206).json({
                    msg : 'Some information was not sent.'
                })
            }

            const post = await Post.Insert(id_postagem, titulo, texto, tipo)
            
            if(post == 2){
                return res.status(203).json({
                    msg : 'There is already a post with this name!'
                })
            }

            if(!post){
                return res.status(203).json({
                    msg : 'Error to create post.'
                })
            }
            
            return res.status(200).json({
                msg: 'Post sent!'
            })
        } 
        catch (error) {
            return res.status(500).send('Error to store post: ' + error);
        }
    }

    static async Select(req, res){
        try{

            const data = await Post.listarTodos();
            
            if(!data)
            {
                return res.status(203).json({
                    msg : "No post found."
                })
            }
            
            return res.status(200).json(data);
        }
        catch(err){
            return res.status(500).send('Error to select post: ' + err);
        }
    }

    static async Update(req, res){
        try{
            const { id_postagem } = req.params;            
            const { texto, tipo } = req.body;

            if(id_postagem == null || id_postagem == '' || texto == null || texto == '' || tipo == null || tipo == ''){
                return res.status(206).json({
                    msg : 'Some information was not sent.'
                }) 
            }

            const data = await Post.Update(id_postagem, texto, tipo);

            if(!data)
            {
                return res.status(203).json({
                    msg : "No post found."
                })
            }
            else
                return res.status(200).json(data);
        }
        catch(err){
            return res.status(500).send('Error to update post: ' + err);
        }
    }

    static async Delete(req, res){
        try {
            const { id_postagem } = req.params;

            if( id_postagem == '' || id_postagem == null){
                return res.status(206).json({
                    msg : 'No post found.'
                })
            }

            const data = await Post.Delete(id_postagem); 

            if(!data)
            {
                return res.status(203).json({
                    msg : 'No post found to delete!'
                })
            }
            else
                return res.status(200).json({
                    msg : 'Post deleted with success!'
                });          

        } 
        catch (err) {
            return res.status(500).send('Error to delete post: ' + err);
        }
    }
};