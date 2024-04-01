const moment = require('moment')
const m_stokbarang = require('../models/m_stokbarang')
const m_jenis_barang = require('../models/m_jenis_barang')
const m_satuan = require('../models/m_satuan')
const m_departemen = require('../models/m_departemen')
const m_lokasi = require('../models/m_lokasi')
// moment.locale = ('id')

module.exports ={
    index:
   async function(req, res) { 
        res.render('template/layout',{
            kontent: 'barang-masuk/index',
            jenis_barang   : await m_jenis_barang.get_all_data(),
            satuan           : await m_satuan.get_all_data(),
            departemen  : await m_departemen.get_all_data(),
            lokasi: await m_lokasi.get_all_data(),
            stokBarang: await m_stokbarang.get_all_data(),
            stok_masuk : await m_stokbarang.get_list_barangMasuk(),
            uri_segment: req.path.split('/'),
            flash_message: req.flash(),
            moment: moment
        })
    },
    create:
    async function (req,res) {
        let f_stok_awal = Number(req.body.f_stok_awal)

        let stokakhir = await m_stokbarang.getStok_akhir_by_Name(req.body.f_nama_barang)
        let sisa_stok = 0

        if(stokakhir.length > 0) {
            sisa_stok = Number(stokakhir[0].stok_akhir)
        }
        let dataform = {
            nama_barang         : req.body.f_nama_barang,
            // departemen          : req.body.f_nama_departemen,
            // lokasi              : req.body.f_nama_lokasi,
            stok_awal           : f_stok_awal,
            stok_keluar         :0,
            stok_akhir          : f_stok_awal + sisa_stok,
            satuan              : req.body.f_satuan,
            is_active           : 1,
            createad_at         : moment().format('YYYY-MM-DD HH:mm:ss'),
            created_by          : req.session.user.id,
            keterangan          : req.body.f_keterangan
        }
        try {
            let insert = await m_stokbarang.createBarangMasuk(dataform)
            if (insert) {
                console.log(insert)
                req.flash('success', 'Berhasil tambah Barang Baru')
                res.redirect('/barang-masuk')
            }
        } catch (error) {
            req.flash('error', error)
            res.redirect('/barang-masuk')
        }
    },

}
