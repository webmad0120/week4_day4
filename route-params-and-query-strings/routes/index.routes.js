const express = require('express');
const router = express.Router();


router.get('/', (req, res, next) => res.render('index'))
router.get('/nosotros', (req, res, next) => res.render('about-us'))

// Formulario de login
router.get('/login', (req, res, next) => res.render('login'))
router.post('/login', (req, res, next) => {

    console.log("El valor del objeto req.body es:", req.body)
    const usernameGiven = req.body.user
    const pwdGiven = req.body.password

    res.send(`Tu usuario es ${usernameGiven} y tu pws es ${pwdGiven}`)
})

module.exports = router;
