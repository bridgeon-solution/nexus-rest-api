import sql from 'mysql2';

export const pool = sql.createPool({
    host: process.env.SQL_HOST,
    user: process.env.SQL_USERNAME,
    password: process.env.SQL_PASSWORD,
    database: 'founder'
}).promise()