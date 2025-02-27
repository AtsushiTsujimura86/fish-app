import dotenv from 'dotenv'
dotenv.config(); // .envをprocess.envに割当て

const setConfig = {
    // 本番用、railway
    production : {
        port: 43448,
        host: "caboose.proxy.rlwy.net" , 
        user: 'root',    
        password:"ufNjmLkOqCiDnXEjhyagChMHrcoEontV" , 
        database:  'fishdb',
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
    },
    // 開発用   
    dev : {
        port: 3306,
        host: 'localhost',
        user: 'root', 
        password: 'Atsu1386', 
        database:  'fishdb', 
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
    }
}
export const db_config = setConfig[process.env.TARGET_ENV];
