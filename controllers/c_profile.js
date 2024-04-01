const moment = require('moment')

const m_profile = require('../models/m_profile')
moment.locale = ('id')

module.exports ={
    index:
   async function(req, res) { 
        res.render('template/layout',{
            kontent: 'profile/index',
            users : await m_profile.getAllData(),
            uri_segment: req.path.split('/'),
            flash_message: req.flash(),
        })
    },
}
