const moment = require('moment')
const m_stokbarang = require('../models/m_stokbarang')
const m_jenis_barang = require('../models/m_jenis_barang')
const m_satuan = require('../models/m_satuan')
const m_departemen = require('../models/m_departemen')
const m_lokasi = require('../models/m_lokasi')
moment.locale = ('id')

module.exports ={
    index:
   async function(req, res) { 
        res.render('template/layout',{
            kontent: 'barang-keluar/index',
            jenis_barang   : await m_jenis_barang.get_all_data(),
            satuan           : await m_satuan.get_all_data(),
            departemen  : await m_departemen.get_all_data(),
            lokasi: await m_lokasi.get_all_data(),
            stokBarang: await m_stokbarang.get_all_data(),
            stok_keluar : await m_stokbarang.get_list_barangKeluar(),
            uri_segment: req.path.split('/'),
            flash_message: req.flash(),
        })
    },
    create:
    async function (req,res) {
        let f_stok_keluar = Number(req.body.f_stok_keluar)

        let stokakhir = await m_stokbarang.getStok_akhir_by_Name(req.body.f_nama_barang)
        let sisa_stok = 0

        if(stokakhir.length > 0) {
            sisa_stok = Number(stokakhir[0].stok_akhir)
        }
        let dataform = {
            nama_barang         : req.body.f_nama_barang,
            departemen          : req.body.f_nama_departemen,
            lokasi              : req.body.f_nama_lokasi,
            stok_awal           : 0,
            stok_keluar         : - f_stok_keluar,
            stok_akhir          : sisa_stok - f_stok_keluar,
            satuan              : req.body.f_satuan,
            is_active           : 1,
            createad_at         : moment().format('YYYY-MM-DD HH:mm:ss'),
            created_by          : req.session.user.id,
            keterangan          : req.body.f_keterangan
        }

        if(dataform.stok_akhir < 0){
            req.flash('danger',`<b> Barang ${dataform.nama_barang}</b>: Jumlah Keluar ( ${dataform.stok_akhir}) melebihi stok yang ada ( ${sisa_stok}) `)
            res.redirect('/barang-keluar')
        }
        else{
            try {
                let insert = await m_stokbarang.createBarangKeluar(dataform)
                if (insert) {
                    console.log(insert)
                    req.flash('success', 'Berhasil Atk di Keluarkan')
                    res.redirect('/barang-keluar')
                }
            } catch (error) {
                req.flash('error', error)
                res.redirect('/barang-keluar')
            }
        }
        
    },

}
