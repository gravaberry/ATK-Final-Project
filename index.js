const express = require('express');
const app = express();
const port = 3000


const session       = require('express-session')
const connectFlash  = require('connect-flash')
const cookieParser  = require('cookie-parser')


const c_auth = require('./controllers/c_auth.js');
const cek_login = require('./controllers/c_auth.js').cek_login
const c_dashboard = require('./controllers/c_dashboard.js');
const c_master_data = require('./controllers/c_master_data.js');
const c_barangmasuk = require('./controllers/c_barangmasuk.js');
const c_barang_keluar = require('./controllers/c_barang_keluar.js');
const c_reports = require('./controllers/c_reports.js');
const c_profile = require('./controllers/c_profile.js');


app.use(connectFlash())
app.use(cookieParser('secret'))
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 2
    }
}))


app.use(express.urlencoded({extended: false}))
app.use("/public", express.static(__dirname + "/public"));
app.set('view engine', 'ejs')
app.set('views', './view')



app.get('/',c_auth.form_login)
app.post('/auth/transaksi-login',c_auth.transaksi_login)
app.get('/dashboard',cek_login, c_dashboard.index)


// =================================================================
//master data
app.get('/master',cek_login,c_master_data.index)

// Jenis Barang
// ================================================================
app.get('/master/jenis-barang',cek_login,c_master_data.jenis_barang)
app.get('/master/jenis-barang/tambah',cek_login,c_master_data.jenis_barang_FormTambah)
app.post('/master/jenis-barang/proses-insert',cek_login,c_master_data.jenis_barang_insert)
app.get('/master/jenis-barang/detail/:id',cek_login,c_master_data.jenis_barang_detail)
app.get('/master/jenis-barang/edit/:id',cek_login,c_master_data.jenis_barang_edit)
app.post('/master/jenis-barang/proses-update/:id',cek_login,c_master_data.jenis_barang_update)
app.post('/master/jenis-barang/delete/:id',cek_login,c_master_data.jenis_barang_delete)



//departement
app.get('/master/departemen',cek_login,c_master_data.departemen)
app.get('/master/departemen/tambah',cek_login,c_master_data.departemen_FormTambah)
app.post('/master/departemen/proses-insert',cek_login,c_master_data.departemen_insert)
app.get('/master/departemen/detail/:id',cek_login,c_master_data.departemen_detail)
app.get('/master/departemen/edit/:id',cek_login,c_master_data.departemen_edit)
app.post('/master/departemen/proses-update/:id',cek_login,c_master_data.departemen_update)
app.post('/master/departemen/delete/:id',cek_login,c_master_data.departemen_delete)



//lokasi
app.get('/master/lokasi',cek_login,c_master_data.lokasi)
app.get('/master/lokasi/tambah',cek_login,c_master_data.lokasi_FormTambah)
app.post('/master/lokasi/proses-insert',cek_login,c_master_data.lokasi_insert)
app.get('/master/lokasi/detail/:id',cek_login,c_master_data.lokasi_detail)
app.get('/master/lokasi/edit/:id',cek_login,c_master_data.lokasi_edit)
app.post('/master/lokasi/proses-update/:id',cek_login,c_master_data.lokasi_update)
app.post('/master/lokasi/delete/:id',cek_login,c_master_data.lokasi_delete)


//satuan
app.get('/master/satuan',cek_login,c_master_data.satuan)
app.get('/master/satuan/tambah',cek_login,c_master_data.satuan_FormTambah)
app.post('/master/satuan/proses-insert',cek_login,c_master_data.satuan_insert)
app.get('/master/satuan/detail/:id',cek_login,c_master_data.satuan_detail)
app.get('/master/satuan/edit/:id',cek_login,c_master_data.satuan_edit)
app.post('/master/satuan/proses-update/:id',cek_login,c_master_data.satuan_update)
app.post('/master/satuan/delete/:id',cek_login,c_master_data.satuan_delete)


//barang masuk
app.get('/barang-masuk',cek_login,c_barangmasuk.index)
app.post('/barang-masuk/proses-input',cek_login,c_barangmasuk.create)


//barang keluar

app.get('/barang-keluar',cek_login,c_barang_keluar.index)
app.post('/barang-keluar/proses-keluar',cek_login,c_barang_keluar.create)

//report

app.get('/reports', cek_login, c_reports.index)
app.get('/reports/barang-masuk', cek_login, c_reports.barangMasuk)
app.get('/reports/barang-keluar', cek_login, c_reports.barangKeluar)
app.get('/reports/barang-akhir', cek_login, c_reports.barangStokAkhir)

app.get('/profile/index', cek_login,c_profile.index)

app.get("/logout", function(req, res) {
    req.session.destroy(() => {
    //  req.logout();
     res.redirect("/"); //Inside a callback… bulletproof!
    });
   });


//handle 404 
app.get('*', (req, res) => {
    res.status(404).render('404');
})


app.listen(port, ()=>{
    console.log(`listening on ${port}`)
})