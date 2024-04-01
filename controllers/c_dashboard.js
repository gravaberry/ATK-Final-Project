module.exports = {
    index: 
    function (req, res, next) {
        res.render('template/layout', {
            kontent: 'dashboard/index',
            
        })
    },
}