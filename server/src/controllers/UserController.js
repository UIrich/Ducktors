import { User } from "../models/UserModel.js";

export class UserController{
    static async Insert(req, res){
        try {
           const { id_user } = req.body;
           if( id_user == '' || id_user == null){
            return res.status(206).json({
                msg : 'User not informed.'
            })   
           }
           
           const data = await User.Insert(id_user);

           if(!data){
                return res.status(203).json({
                    msg : 'Error to register user.'
                })
            }
        
            return res.status(200).json({
                msg: 'User registration successful!'
            })

        } 
        catch (error) {
            return res.status(500).send('Error to insert user: ' + error);
        }
    }

    static async Select(req, res){
        try {
            const data = await User.Select();

            if(!data){
                 return res.status(203).json({
                     msg : 'No user found to select.'
                 })
             }
         
             return res.status(200).json(data);
        } 
        catch (error) {
            return res.status(500).send('Error to select user: ' + error);
        }
    }

    static async Update(req, res){
        try{
            const { id_user } = req.params;
            const { nick, email, senha, nivel, stat, avatar } = req.body;

            if( id_user == '' || id_user == null || nick == '' || nick == null || 
            email == '' || email == null || senha == '' || senha == null || 
            nivel == '' || nivel == null || stat == '' || stat == null || 
            avatar == '' || avatar == null){
                return res.status(206).json({
                    msg : 'Some information was not sent.'
                })
            } 

            const data = await User.Update(id_user, email, senha, nivel, stat, avatar);

            if(!data)
            {
                return res.status(203).json({
                    msg : 'No user found to update.'
                })
            }

            return res.status(200).json(data);
        }
        catch (error) {
            return res.status(500).send('Error to update user: ' + error);
        }
    }

    static async Delete(req, res){
        try{
            const { id_user } = req.params;

            if( id_user == '' || id_user == null){
                return res.status(206).json({
                    msg : 'User not selected to delete.'
                })
            }

            const data = await User.Delete(id_user); 

            if(!data)
            {
                return res.status(203).json({
                    msg : 'User not found to delete.'
                })
            }
            else
                return res.status(200).json({
                    msg : 'User deleted with success.'
                });          

        } 

        catch (error) {
            return res.status(500).send('Error to delete user: ' + error);
        }
    }
};