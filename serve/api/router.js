var express = require('express')
var app = express()
let router = app.Router()

router.get('/',(req,res)=>{
    res.send('qwe')
})

export default {router}