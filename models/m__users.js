// const db = require('../config/db').db
const db = require('../config/db2').db

module.exports =
{
    

    get_byName:
    async function(username) {
        try {
            let sql = await db.query(`
                SELECT * FROM users WHERE username = $1`,
                [username]
            )
            return sql.rows
        } catch (error) {
            return error
        }
    },


}