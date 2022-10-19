import { User } from "../models/UserModel.js"

export class UserController{
    static async GetUser(req, res){
        try {
                const usuarios = await User.Get()
                return res.status(200).json(usuarios)
        } 
        catch (error) 
        {
            console.log('controller error ' + error)
            return res.status(500).json(error)
        } 
    }

    static async GetUserProfile(req, res){
        try {
                const { nick, email, senha, stat } = req.body
                const usuario = await new User(nick, email, senha, stat).GetProfile()
                return res.status(200).json(usuario)
        } 
        catch (error) 
        {
            console.log('controller error ' + error) 
            return res.status(500).json(error)
        }
    }

    static async InsertUser(req, res){
        try {
                const { nick, email, senha } = req.body
                const InsertUser = await new User(1, nick, email, senha).Insert()
                return res.status(200).json(InsertUser)
        } 
        catch (error) 
        {
            console.log('controller error ' + error) 
            return res.status(500).json(error) 
        }
    } 

    static async UpdateUser(req, res){
        try {
                const { id_user } = req.params
                const { nick, email, senha, stat } = req.body
                const UpdateUser = await new User(id_user, nick, email, senha, stat).Update()
                return res.status(200).json(UpdateUser)
        } 
        catch (error) 
        {
            console.log('controller error ' + error)
            return res.status(500).json(error)
        }
    }

    static async DeleteUser(req, res){
        try {
                const { id_user } = req.params
                const { nick, email, senha, stat } = req.body
                const DeleteUser = await new User(id_user, nick, email, senha, stat).Delete()
                return res.status(200).json(DeleteUser)
        } 
        catch (error) 
        {
            console.log('controller error ' + error)
            return res.status(500).json(error)
        }
    }

    static async LoginUser(req, res){
        try {
            const { email, senha } = req.body
            const LoginUser = await new User(email, senha).Login()
            return res.status(200).json(LoginUser)
        } 
        catch (error) {
            console.log('controller error ' + error)
        }
    }

}