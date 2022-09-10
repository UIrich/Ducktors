import { User } from "../models/UserModel.js";

export class UserController{
    static async store(req, res){
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
            return res.status(500).send('Error to store user: ' + error);
        }
    }
};