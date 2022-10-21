import express from "express";
import { UserController } from "./src/controllers/UserController.js";
import { CommunityController } from "./src/controllers/CommunityController.js";

const routes = express.Router();

routes.get("/", (req, res) => {
    return res.status(200).send('the cicle continues');
});

routes.get("/user/get", UserController.GetUser);
routes.post("/user/insert", UserController.InsertUser);
routes.put("/user/update/:id_user", UserController.UpdateUser)
routes.delete("/user/delete/:id_user", UserController.DeleteUser);
routes.post("/user/login", UserController.LoginUser);
routes.put("/user/profile", UserController.GetUserProfile);

routes.get("/community/get", CommunityController.GetCommunity);
routes.post("/community/insert", CommunityController.InsertCommunity);
routes.put("/community/update/:id_community", CommunityController.UpdateCommunity);
routes.delete("/community/delete/:id_community", CommunityController.DeleteCommunity);

export { routes }
