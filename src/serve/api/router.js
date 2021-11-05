var express = require('express')

let router = express.Router()

router.get('/test',(req,res)=>{
    res.send({msg:'我最帅'})
})

function getRouter(){
    return router
}
exports.router = getRouter
