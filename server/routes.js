import express from "express";
import { UserController } from "./src/controllers/UserController.js";
import { PostController } from "./src/controllers/PostController.js";

const routes = express.Router();

routes.get("/", (req, res) => {
    return res.status(200).send('the cicle continues');
});

routes.get("/users", UserController.Select);
routes.post("/users/add", UserController.Insert);
routes.put("/users/edit/:id", UserController.Update);
routes.delete("/users/remove/:id", UserController.Delete);

routes.get("/posts", PostController.Select);
routes.post("/posts/add", PostController.Insert);
routes.put("/posts/edit/:id", PostController.Update);
routes.delete("/posts/remove/:id", PostController.Delete);

export { routes }
