import { Community } from "../models/CommunityModel.js"

export class CommunityController{
    static async GetCommunity(req, res){
        try {
                const comunidades = await Community.Get()
                return res.status(200).json(comunidades)
        } 
        catch (error) 
        {
            console.log('controller error ' + error)
            return res.status(500).json(error)
        } 
    }

    static async InsertCommunity(req, res){
        try {
                const { nome } = req.body
                const InsertCommunity = await new Community(1, nome).Insert()
                return res.status(200).json(InsertCommunity)
        } 
        catch (error) 
        {
            console.log('controller error ' + error) 
            return res.status(500).json(error) 
        }
    } 

    static async UpdateCommunity(req, res){
        try {
                const { id_comunidade } = req.params
                const { nome, stat } = req.body
                const UpdateUser = await new Community(id_comunidade, nome, stat).Update()
                return res.status(200).json(UpdateUser)
        } 
        catch (error) 
        {
            console.log('controller error ' + error)
            return res.status(500).json(error)
        }
    }

    static async DeleteCommunity(req, res){
        try {
                const { id_comunidade } = req.params
                const { nome, stat } = req.body
                const DeleteCommunity = await new Community(id_comunidade, nome, stat).Delete()
                return res.status(200).json(DeleteCommunity)
        } 
        catch (error) 
        {
            console.log('controller error ' + error)
            return res.status(500).json(error)
        }
    }
}