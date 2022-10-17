import express from "express";
import { UserController } from "./src/controllers/UserController.js";

const routes = express.Router();

routes.get("/", (req, res) => {
    return res.status(200).send('the cicle continues');
});

routes.get("/user/get", UserController.GetUser);
routes.post("/user/insert", UserController.InsertUser);
routes.put('/user/update/:id_user', UserController.UpdateUser)
routes.delete("/user/delete/:id_user", UserController.DeleteUser);
routes.post("/user/login", UserController.LoginUser);
routes.put("/user/profile", UserController.GetUserProfile);

export { routes }
