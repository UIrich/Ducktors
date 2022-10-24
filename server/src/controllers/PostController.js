import { Post } from "../models/PostModel.js"

export class PostController{
    static async GetPost(req, res){
        try {
                const postagens = await Post.Get()
                return res.status(200).json(postagens)
        } 
        catch (error) 
        {
            console.log('controller error ' + error)
            return res.status(500).json(error)
        } 
    }

    static async InsertPost(req, res){
        try {
                const { id_autor, tipo, titulo, texto, img } = req.body
                const InsertPost = await new Post(id_autor, tipo, titulo, texto, img).Insert()
                return res.status(200).json(InsertPost)
        } 
        catch (error) 
        {
            console.log('controller error ' + error) 
            return res.status(500).json(error) 
        }
    } 

    static async UpdatePost(req, res){
        try {
                const { id_postagem } = req.params
                const { id_autor, tipo, titulo, texto, img, stat } = req.body
                const UpdatePost = await new Post(id_postagem, id_autor, tipo, titulo, texto, img, stat).Update()
                return res.status(200).json(UpdatePost)
        } 
        catch (error) 
        {
            console.log('controller error ' + error)
            return res.status(500).json(error)
        }
    }

    static async DeletePost(req, res){
        try {
                const { id_postagem } = req.params
                const { id_autor, tipo, titulo, texto, img, stat } = req.body
                const DeletePost = await new Post(id_postagem, id_autor, tipo, titulo, texto, img, stat).Delete()
                return res.status(200).json(DeletePost)
        } 
        catch (error) 
        {
            console.log('controller error ' + error)
            return res.status(500).json(error)
        }
    }
}