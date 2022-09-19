import sql from 'mssql';
import { con } from './database.js';

    export async function ConnectSqlServerTest(){
        try{
            sql.on('error', err => {
                console.log(`\x1b[31m[error] ${err}`);
                return false;
            });

            const pool = new sql.ConnectionPool(con);
            
            await pool.connect();

            if(JSON.stringify(pool._connected) == 'true')
            {
                console.log('\x1b[36m[connection] database function test connected');
                await pool.close();
                return true
            }
            else
            {
                console.log(`${pool}`);
                await pool.close();
                return false
            }
        }   
        catch(err){
            console.log(`\x1b[31m[error] ${err}`);
            return false;
        }

    };

    export async function CreatePool(){
        try{
            const pool = new sql.ConnectionPool(con);
            
            await pool.connect();

            return pool;
            
        }
        catch(err){
            console.log(`\x1b[31m[error] ${err}`)
            return false
        }
    };