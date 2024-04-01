const db = require('../config/db').db

module.exports = {
    getAllData:
    async function(username) {
        try {
            let sql = await db.query(`
                SELECT * FROM users`,
                [username]
            )
            return sql[0]
        } catch (error) {
            return error
        }
    },
}