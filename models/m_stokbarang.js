const db    = require('../config/db').db

const table = 'stok_barangs'

module.exports =
 {
    get_all_data:
    async function(req, res, next) {
        
    },
    getStok_akhir_by_Name:
    async function (nama_barang){
        try {
            let datas = await db.query(`
            select * from ${table}
            where nama_barang=$1
            order by id desc
            limit 1;`,
            {bind: [nama_barang]}
            )
            return datas[0]
        } catch (error) {
            return error
        }
    },
    createBarangMasuk:
    async function (data){
        try {
            let datas = await db.query(
                `INSERT INTO ${table} (nama_barang,stok_awal,stok_keluar,stok_akhir,satuan,is_active,createad_at,created_by,keterangan)
                VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9);`,
                {bind: [data.nama_barang, data.stok_awal, data.stok_keluar, data.stok_akhir, data.satuan, data.is_active, data.createad_at, data.created_by,data.keterangan]}
            )
            return datas[0]
        } catch (error) {
            return error
        }
    },
    createBarangKeluar:
    async function (data){
        try {
            let datas = await db.query(
                `INSERT INTO ${table} (nama_barang,departemen,lokasi,stok_awal,stok_keluar,stok_akhir,satuan,is_active,createad_at,created_by,keterangan)
                VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10,$11);`,
                {bind: [data.nama_barang, data.departemen, data.lokasi, data.stok_awal, data.stok_keluar, data.stok_akhir, data.satuan, data.is_active, data.createad_at, data.created_by,data.keterangan]}
            )
            return datas[0]
        } catch (error) {
            return error
        }
    },

    get_list_barangMasuk:
    async function (){
        try {
            let datas = await db.query(`
            select
                    b.*,
                    j.nama_barang as nama_barang,
                    g.nama_departemen as nama_departemen,
                    l.nama_lokasi as nama_lokasi,
                    s.nama_satuan as nama_satuan
                from ${table} as b
                left join jenis_barangs as j     on j.kode = b.nama_barang
                left join departemens as g          on g.kode = b.departemen
                left join lokasis as l          on l.kode = b.lokasi
                left join satuans as s          on s.kode = b.satuan
                where stok_awal > 0
                order by id asc;`)
                return datas[0]
        } catch (error) {
            return error
        }
    },
    get_list_barangKeluar:
    async function (){
        try {
            let datas = await db.query(`
            select
                    b.*,
                    j.nama_barang as nama_barang,
                    g.nama_departemen as nama_departemen,
                    l.nama_lokasi as nama_lokasi,
                    s.nama_satuan as nama_satuan
                from ${table} as b
                left join jenis_barangs as j     on j.kode = b.nama_barang
                left join departemens as g          on g.kode = b.departemen
                left join lokasis as l          on l.kode = b.lokasi
                left join satuans as s          on s.kode = b.satuan
                where stok_keluar < 0
                order by id asc;`)
                return datas[0]
        } catch (error) {
            return error
        }
    },
    
    get_list_barangAkhir:
    async function (){
        try {
            let datas = await db.query(`
            select
                    b.*,
                    j.nama_barang as nama_barang,
                    g.nama_departemen as nama_departemen,
                    l.nama_lokasi as nama_lokasi,
                    s.nama_satuan as nama_satuan
                from ${table} as b
                left join jenis_barangs as j     on j.kode = b.nama_barang
                left join departemens as g          on g.kode = b.departemen
                left join lokasis as l          on l.kode = b.lokasi
                left join satuans as s          on s.kode = b.satuan
                where stok_keluar < 0
                order by id desc
                limit 1;`)
                return datas[0]
        } catch (error) {
            return error
        }
    },
 }

//  where stok_keluar < 0 and stok_keluar < 0
