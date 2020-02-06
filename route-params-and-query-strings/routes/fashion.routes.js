const express = require('express');
const router = express.Router();

/* GET home page */
router.get('/', (req, res) => res.render('fashion-index'))
router.get('/novedades', (req, res) => res.render('fashion-trends'))


router.get('/buscar/temporada/:season', (req, res) => {

    console.log('EL objeto de URL params es: ', req.params)
    console.log('EL objeto de Query String: ', req.query)

    const urlInfo = {
        URLparams: req.params,
        queryString: req.query
    }

    res.render('fashion-search', urlInfo)
})

module.exports = router