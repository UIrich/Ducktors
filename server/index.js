import express from 'express';
import cors from 'cors';
import { ConnectSqlServerTest } from './database.js';
import { routes } from "./routes.js";

const app = express();
const PORT = process.env.PORT = 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended : true,
}),
);

app.use(routes);

ConnectSqlServerTest().then((data) =>{
    if(data)
    {
        app.listen(PORT, ()=>{
            console.log('\x1b[36m[connection] server is running on', PORT);
        });
    }
});