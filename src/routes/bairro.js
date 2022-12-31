const express  =  require('express')
const Bairros = require('../config')
const router = express.Router()

router.get('/',async(req,res)=>{
    const snapshot = await Bairros.get()
    const list = snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}))
    res.send(list)
})

module.exports = router