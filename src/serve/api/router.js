const express = require('express')
const fs = require('fs')

let router = express.Router()

router.get('/login',(req,res)=>{
    console.log(__dirname)
    fs.readFile("./src/menus/router.json",'utf8',(err,data)=>{
        if (err){
            console.log(err)
        }else {
            res.send({msg:data})
        }

    })

})
router.get('/getRouters',(req,res)=>{
    fs.readFile("./src/menus/router.json",'utf8',(err,data)=>{
        if (err){
            console.log(err)
        }else {
            res.send({msg:data})
        }

    })
})
function getRouter(){
    return router
}
exports.router = getRouter
