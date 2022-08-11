import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mysql from 'mysql2';
import { routes } from "./routes.js";
import { con } from './utils.js'

const app = express();
const PORT = process.env.PORT = 5000;
const db = mysql.createPool(con)

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(routes);

app.get("/api/get", (req, res) => {
    const sqlGet = "SELECT * FROM user";
    db.query(sqlGet, (error, result) => {
        res.send(result);
    });
})

app.post("/api/post", (req, res) => {
    const {name, email, password} = req.body;
    const sqlInsert = "INSERT INTO user (name, email, password) VALUES (?, ?, ?, ?, ?, ?)";
    db.query(sqlInsert, [name, email, password], (error, result) => {
        if (error) {
            console.log(error);
        }
    });
});

app.post("/api/remove/:id", (req, res) => {
    const { id } = req.params;
    const sqlRemove = "DELETE FROM user WHERE id = ?";
    db.query(sqlRemove, id, (error, result) => {

    });
})

app.get("/api/get/:id", (req, res) => {
    const { id } = req.params;
    const sqlGet = "SELECT * FROM user WHERE id = ?";
    db.query(sqlGet, id, (error, result) => {
        if(error) {
            console.log(error);
        }
        res.send(result);
    });
})

app.put("/api/put/:id", (req, res) => {
    const { id } = req.params;
    const {name, email, password} = req.body;
    const sqlUpdate = "UPDATE user SET name = ?, email = ?, password = ? WHERE id = ?";
    db.query(sqlUpdate, [name, email, password, id], (error, result) => {
        if(error) {
            console.log(error);
        }
        res.send(result);
    });
})

app.get("/", (req, res) => {

})

app.listen(PORT, () => {
    console.log("server is running on", PORT)
})