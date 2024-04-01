const Pool = require('pg').Pool

const db = new Pool({
    host: 'localhost',
    port: 5432,
    database: 'db_atk',
    user: 'postgres',
    password: 'root',
    max: 20,
    idleTimeoutMillis: 30000, //30 detik
    connectionTimeoutMillis: 2000, //2 detik
})


module.exports = {
    db
}