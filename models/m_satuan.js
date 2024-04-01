const db    = require('../config/db').db

const table = 'satuans'


module.exports =
 {
    get_all_data :
    async function (){
        try {
            let data = await db.query(
                // `select * from ${table} where is_active = 1`
                `select ${table} .*, users.username as name
                from ${table} 
                LEFT JOIN users on users.id = ${table}.created_by
                where is_active =1
                order by id asc`
            )
            return data[0]
        } catch (error) {
            return error
        }
    },
    get_byId:
    async function (id_satuan){
        try {
            let datas = await db.query(
                `SELECT
                    j.*, u.username AS created_username, u.nama AS created_nama
                FROM ${table} AS j
                LEFT JOIN users AS u ON u.id = j.created_by
                WHERE is_active = 1 AND j.id = $1;`,
                {bind: [id_satuan]}
            )
            return datas[0]
        } catch (error) {
            return error
        }
    },

    create:
    async function (data){
        try {
            let datas = await db.query(
                `INSERT INTO ${table} (kode, nama_satuan,description, created_at, created_by, is_active)
                VALUES ($1, $2, $3, $4, $5, $6);`,
                {bind: [data.kode, data.nama_satuan,data.description, data.created_at, data.created_by, data.is_active]}
            )
            return datas[0]
        } catch (error) {
            return error
        }
    },
    update:
    async function(data, id_satuan) {
        try {
            let dataUpdate = await db.query(
                `UPDATE ${table} SET
                kode = $1,
                nama_satuan = $2,
                description = $3,
                updated_at = $4,
                updated_by = $5
                WHERE id = $6`,
                {bind: [data.kode, data.nama_satuan,data.description, data.updated_at, data.updated_by, id_satuan]}
            )
            return dataUpdate
        } catch (error) {
            return error
        }
    },
    delete_satuan:
    async function(id_satuan) {
        try {
            let hapus= await db.query(
                `UPDATE ${table} SET is_active = 0
                where id = $1;`,
                {bind: [id_satuan]}
            )
           return hapus[0]
        } catch (error) {
            return error
        }
    }
}