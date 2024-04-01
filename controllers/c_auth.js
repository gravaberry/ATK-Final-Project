const bcrypt = require('bcryptjs')
const m__users = require('../models/m__users')

module.exports ={
    form_login:
    function (req, res, next) {
        res.render('auth/form-login',{
            flash_message:req.flash()
        })
        
    },

    transaksi_login:
    async function (req,res) {
        let username = req.body.f_username
        let password = req.body.f_password
        let get_user = await m__users.get_byName(username)

        // cek username
        try {
            if (get_user.length > 0) {
                let password_match = bcrypt.compareSync(password, get_user[0].password)
                if (password_match) {
                    req.session.user = get_user[0]
                    return res.redirect('/dashboard')
                } else {
                    req.flash('warning', 'password salah')
                    res.redirect('/')
                }
            } else {
                req.flash('info', 'username not existed')
                res.redirect('/')
            }
        } catch (error) {
            return error
            // res.redirect(`/auth?m=${error}`)
        }
    },

    cek_login:
    function (req,res,next) {
        if (req.session.user) {
            next()
        } else {
            res.redirect('/')
        }
    }
    
}