const moment = require('moment')
moment.locale = ('id')
const m_jenis_barang = require('../models/m_jenis_barang')
const m_departemen = require('../models/m_departemen')
const m_lokasi = require('../models/m_lokasi')
const m_satuan = require('../models/m_satuan')

module.exports ={
    index:
    function(req, res) { 
        res.render('template/layout',{
            kontent: 'master/index',
            uri_segment: req.path.split('/'),
            flash_message: req.flash(),
        })
    },

    jenis_barang:
    async function(req, res) {
        res.render('template/layout',{
            kontent: 'master/index',
            subkontent: 'jenis-barang/index',
            uri_segment: req.path.split('/'),
            flash_message: req.flash(),
            jenis_barang: await m_jenis_barang.get_all_data(),
        })
    },
    jenis_barang_FormTambah:
    function(req, res) {
        res.render('template/layout',{
            kontent: 'master/index',
            subkontent:'jenis-barang/form-tambah',
            uri_segment: req.path.split('/'),
            flash_message:req.flash(),
        });
    },
    jenis_barang_insert:
    async function (req,res) {
        let dataform = {
            kode               : req.body.f_kode,
            nama_barang        : req.body.f_nama_barang,
            description        : req.body.f_description,
            is_active   : 1,
            created_at  : moment().format('YYYY-MM-DD HH:mm:ss'),
            created_by  : req.session.user.id,
        }
        try {
            let insert = await m_jenis_barang.create(dataform)
            if (insert) {
                console.log(insert)
                req.flash('success', 'Berhasil tambah Jenis Barang Baru')
                res.redirect('/master/jenis-barang')
            }
        } catch (error) {
            req.flash('error', error)
            res.redirect('/master/jenis-barang/tambah')
        }
    },

    jenis_barang_detail:
    async function (req,res) {
        let id_jenis = req.params.id
        res.render('template/layout', {
            kontent          : 'master/index',
            subkontent       : 'jenis-barang/detailJenis-Barang',
            uri_segment     : req.path.split('/'),
            flash_message   : req.flash(),
            jenis_barang      : await m_jenis_barang.get_byId(id_jenis),
            moment          : moment,
        })
    },
    jenis_barang_edit:
    async function (req,res) {
        let id_jenis = req.params.id
        res.render('template/layout', {
            kontent : 'master/index',
            subkontent : 'jenis-barang/edit-barang',
            uri_segment:req.path.split('/'),
            flash_message:req.flash(),
            jenis_barang:await m_jenis_barang.get_byId(id_jenis),
        })
    },
    jenis_barang_update:
    async function (req,res) {
        let id_jenis = req.params.id
        let dataForm = {
            kode               : req.body.f_kode,
            nama_barang        : req.body.f_nama_barang,
            description        : req.body.f_description,
            updated_at         : moment().format('YYYY-MM-DD HH:mm:ss'),
            updated_by         : req.session.user.id,
        }
        try {
            let updates = await m_jenis_barang.update(dataForm, id_jenis)
            if (updates) {
                req.flash('success', `Berhasil perbarui jenis Barang ${dataForm.nama_barang}`)
                res.redirect('/master/jenis-barang')
            }
        } catch (error) {
            req.flash('danger', 'Data gagal disimpan')
            res.redirect(`/master/jenis-barang/edit/${id_jenis}`)
        }
    },
    jenis_barang_delete:
   async function (req, res) {
    let id_jenis = req.params.id
            try {
                let hapus = await m_jenis_barang.delete_jenis_barang(id_jenis)
                if (hapus){
                    req.flash('success','Data berhasil dihapus')
                    res.redirect('/master/jenis-barang')
                }
            } catch (error) {
                req.flash('danger','Data gagal dihapus')
                res.redirect('master/jenis-barang')
            }
   },


   //departement
//    ==============================================================================================

departemen:
async function(req, res) {
    res.render('template/layout',{
        kontent: 'master/index',
        subkontent: 'departemen/index',
        uri_segment: req.path.split('/'),
        flash_message: req.flash(),
        departemen: await m_departemen.get_all_data(),
    })
},
departemen_FormTambah:
function(req, res) {
    res.render('template/layout',{
        kontent: 'master/index',
        subkontent:'departemen/form-tambah',
        uri_segment: req.path.split('/'),
        flash_message:req.flash(),
    });
},
departemen_insert:
async function (req,res) {
    let dataform = {
        kode               : req.body.f_kode,
        nama_departemen    : req.body.f_nama_departemen,
        description        : req.body.f_description,
        is_active   : 1,
        created_at  : moment().format('YYYY-MM-DD HH:mm:ss'),
        created_by  : req.session.user.id,
    }
    try {
        let insert = await m_departemen.create(dataform)
        if (insert) {
            console.log(insert)
            req.flash('success', 'Berhasil tambah Departemen baru')
            res.redirect('/master/departemen')
        }
    } catch (error) {
        req.flash('error', error)
        res.redirect('/master/departemen/tambah')
    }
},

departemen_detail:
async function (req,res) {
    let id_departemen = req.params.id
    res.render('template/layout', {
        kontent          : 'master/index',
        subkontent       : 'departemen/detail',
        uri_segment     : req.path.split('/'),
        flash_message   : req.flash(),
        departemen      : await m_departemen.get_byId(id_departemen),
        moment          : moment,
    })
},
departemen_edit:
async function (req,res) {
    let id_departemen = req.params.id
    res.render('template/layout', {
        kontent : 'master/index',
        subkontent : 'departemen/edit',
        uri_segment:req.path.split('/'),
        flash_message:req.flash(),
        departemen:await m_departemen.get_byId(id_departemen),
    })
},
departemen_update:
async function (req,res) {
    let id_jenis = req.params.id
    let dataForm = {
        kode               : req.body.f_kode,
        nama_departemen        : req.body.f_nama_barang,
        description        : req.body.f_description,
        updated_at         : moment().format('YYYY-MM-DD HH:mm:ss'),
        updated_by         : req.session.user.id,
    }
    try {
        let updates = await m_departemen.update(dataForm, id_jenis)
        if (updates) {
            req.flash('success', `Berhasil perbarui departemen ${dataForm.nama_departemen}`)
            res.redirect('/master/departemen')
        }
    } catch (error) {
        req.flash('danger', 'Data gagal disimpan')
        res.redirect(`/master/departemen/edit/${id_departemen}`)
    }
},
departemen_delete:
async function (req, res) {
let id_departemen = req.params.id
        try {
            let hapus = await m_departemen.delete_departemen(id_departemen)
            if (hapus){
                req.flash('success','Data berhasil dihapus')
                res.redirect('/master/departemen')
            }
        } catch (error) {
            req.flash('danger','Data gagal dihapys')
            res.redirect('master/departemen')
        }
},

//lokasi
// ================================================================


lokasi:
async function(req, res) {
    res.render('template/layout',{
        kontent: 'master/index',
        subkontent: 'lokasi/index',
        uri_segment: req.path.split('/'),
        flash_message: req.flash(),
        lokasi: await m_lokasi.get_all_data()
    })
},
    
lokasi_FormTambah:
function(req, res) {
    res.render('template/layout',{
        kontent: 'master/index',
        subkontent:'lokasi/form-tambah',
        uri_segment: req.path.split('/'),
        flash_message:req.flash(),
    });
},
lokasi_insert:
async function (req,res) {
    let dataform = {
        kode               : req.body.f_kode,
        nama_lokasi    : req.body.f_nama_lokasi,
        description        : req.body.f_description,
        is_active   : 1,
        created_at  : moment().format('YYYY-MM-DD HH:mm:ss'),
        created_by  : req.session.user.id,
    }
    try {
        let insert = await m_lokasi.create(dataform)
        if (insert) {
            console.log(insert)
            req.flash('success', 'Berhasil tambah Lokasi Cabang baru')
            res.redirect('/master/lokasi')
        }
    } catch (error) {
        req.flash('error', error)
        res.redirect('/master/lokasi/tambah')
    }
},

lokasi_detail:
async function (req,res) {
    let id_lokasi = req.params.id
    res.render('template/layout', {
        kontent          : 'master/index',
        subkontent       : 'lokasi/detail',
        uri_segment     : req.path.split('/'),
        flash_message   : req.flash(),
        lokasi      : await m_lokasi.get_byId(id_lokasi),
        moment          : moment,
    })
},
lokasi_edit:
async function (req,res) {
    let id_lokasi = req.params.id
    res.render('template/layout', {
        kontent : 'master/index',
        subkontent : 'lokasi/edit',
        uri_segment:req.path.split('/'),
        flash_message:req.flash(),
        lokasi:await m_lokasi.get_byId(id_lokasi),
    })
},
lokasi_update:
async function (req,res) {
    let id_jenis = req.params.id
    let dataForm = {
        kode               : req.body.f_kode,
        nama_lokasi        : req.body.f_nama_lokasi,
        description        : req.body.f_description,
        updated_at         : moment().format('YYYY-MM-DD HH:mm:ss'),
        updated_by         : req.session.user.id,
    }
    try {
        let updates = await m_lokasi.update(dataForm, id_jenis)
        if (updates) {
            req.flash('success', `Berhasil perbarui lokasi ${dataForm.nama_lokasi}`)
            res.redirect('/master/lokasi')
        }
    } catch (error) {
        req.flash('danger', 'Data gagal disimpan')
        res.redirect(`/master/lokasi/edit/${id_lokasi}`)
    }
},
lokasi_delete:
async function (req, res) {
let id_lokasi = req.params.id
        try {
            let hapus = await m_lokasi.delete_lokasi(id_lokasi)
            if (hapus){
                req.flash('success','Data berhasil dihapus')
                res.redirect('/master/lokasi')
            }
        } catch (error) {
            req.flash('danger','Data gagal dihapys')
            res.redirect('master/lokasi')
        }
},


//satuan
// ================================================================

satuan:
async function(req, res) {
    res.render('template/layout',{
        kontent: 'master/index',
        subkontent: 'satuan/index',
        uri_segment: req.path.split('/'),
        flash_message: req.flash(),
        satuan:await m_satuan.get_all_data(),
    })
},
    
    
satuan_FormTambah:
function(req, res) {
    res.render('template/layout',{
        kontent: 'master/index',
        subkontent:'satuan/form-tambah',
        uri_segment: req.path.split('/'),
        flash_message:req.flash(),
        
    });
},
satuan_insert:
async function (req,res) {
    let dataform = {
        kode               : req.body.f_kode,
        nama_satuan        : req.body.f_nama_satuan,
        description        : req.body.f_description,
        created_at  : moment().format('YYYY-MM-DD HH:mm:ss'),
        created_by  : req.session.user.id,
        is_active   : 1,
    }
    try {
        let insert = await m_satuan.create(dataform)
        if (insert) {
            console.log(insert)
            req.flash('success', 'Berhasil tambah Satuan baru')
            res.redirect('/master/satuan')
        }
    } catch (error) {
        req.flash('error', error)
        res.redirect('/master/satuan/tambah')
    }
},

satuan_detail:
async function (req,res) {
    let id_satuan = req.params.id
    res.render('template/layout', {
        kontent          : 'master/index',
        subkontent       : 'satuan/detail',
        uri_segment     : req.path.split('/'),
        flash_message   : req.flash(),
        satuan      : await m_satuan.get_byId(id_satuan),
        moment          : moment,
    })
},
satuan_edit:
async function (req,res) {
    let id_satuan = req.params.id
    res.render('template/layout', {
        kontent : 'master/index',
        subkontent : 'satuan/edit',
        uri_segment:req.path.split('/'),
        flash_message:req.flash(),
        satuan:await m_satuan.get_byId(id_satuan),
    })
},
satuan_update:
async function (req,res) {
    let id_jenis = req.params.id
    let dataForm = {
        kode               : req.body.f_kode,
        nama_satuan        : req.body.f_nama_satuan,
        description        : req.body.f_description,
        updated_at         : moment().format('YYYY-MM-DD HH:mm:ss'),
        updated_by         : req.session.user.id,
    }
    try {
        let updates = await m_satuan.update(dataForm, id_jenis)
        if (updates) {
            req.flash('success', `Berhasil perbarui Satuan ${dataForm.nama_satuan}`)
            res.redirect('/master/satuan')
        }
    } catch (error) {
        req.flash('danger', 'Data gagal disimpan')
        res.redirect(`/master/satuan/edit/${id_satuan}`)
    }
},
satuan_delete:
async function (req, res) {
let id_satuan = req.params.id
        try {
            let hapus = await m_satuan.delete_satuan(id_satuan)
            if (hapus){
                req.flash('success','Data berhasil dihapus')
                res.redirect('/master/satuan')
            }
        } catch (error) {
            req.flash('danger','Data gagal dihapys')
            res.redirect('master/satuan')
        }
},

}
