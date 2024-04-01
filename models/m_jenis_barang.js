const db    = require('../config/db').db

const table = 'jenis_barangs'


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
    async function (id_jenis){
        try {
            let datas = await db.query(
                `SELECT
                    j.*, u.username AS created_username, u.nama AS created_nama
                FROM ${table} AS j
                LEFT JOIN users AS u ON u.id = j.created_by
                WHERE is_active = 1 AND j.id = $1;`,
                {bind: [id_jenis]}
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
                `INSERT INTO ${table} (kode, nama_barang,description, is_active, created_at, created_by)
                VALUES ($1, $2, $3, $4, $5, $6);`,
                {bind: [data.kode, data.nama_barang,data.description, data.is_active, data.created_at, data.created_by]}
            )
            return datas[0]
        } catch (error) {
            return error
        }
    },
    update:
    async function(data, id_jenis) {
        try {
            let dataUpdate = await db.query(
                `UPDATE ${table} SET
                kode = $1,
                nama_barang = $2,
                description = $3,
                updated_at = $4,
                updated_by = $5
                WHERE id = $6`,
                {bind: [data.kode, data.nama_barang,data.description, data.updated_at, data.updated_by, id_jenis]}
            )
            return dataUpdate
        } catch (error) {
            return error
        }
    },
    delete_jenis_barang:
    async function(id_jenis) {
        try {
            let hapus= await db.query(
                `UPDATE ${table} SET is_active = 0
                where id = $1;`,
                {bind: [id_jenis]}
            )
           return hapus[0]
        } catch (error) {
            return error
        }
    }
}