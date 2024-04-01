const moment        = require('moment')

const m_stokbarang = require('../models/m_stokbarang')

moment.locale =('id')



module.exports =
{
    index:
    function(req,res) {
        res.render('template/layout', {
            kontent          : 'reports/index',
            uri_segment     : req.path.split('/'),
            flash_message   : req.flash(),
        })
    },



    barangMasuk:
    async function (req,res) {
        res.render('template/layout', {
            kontent          : 'reports/index',
            subkontent       : 'barang-masuk/index',
            stok_masuk      : await m_stokbarang.get_list_barangMasuk(),
            uri_segment     : req.path.split('/'),
            flash_message   : req.flash(),
            moment          : moment
        })
    },
    
    barangKeluar:
    async function (req,res) {
        res.render('template/layout', {
            kontent          : 'reports/index',
            subkontent       : 'barang-keluar/index',
            stok_keluar     : await m_stokbarang.get_list_barangKeluar(),
            uri_segment     : req.path.split('/'),
            flash_message   : req.flash(),
            moment          : moment
        })
    },
    barangStokAkhir:    
    async function (req,res) {
        res.render('template/layout', {
            kontent          : 'reports/index',
            subkontent       : 'rekap/index',
            stok_akhir    : await m_stokbarang.get_list_barangAkhir(),
            uri_segment     : req.path.split('/'),
            flash_message   : req.flash(),
            moment          : moment
        })
    },
}