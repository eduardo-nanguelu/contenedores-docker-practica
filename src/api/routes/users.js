const express = require('express')
const router = express.Router()

router.get('/get', (req,res) => {
    res.send('get')
})

router.post('/post', (req,res) => {
    res.send('post')
})

module.exports = router