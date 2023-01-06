const express  =  require('express')
const Bairros = require('../config')
const router = express.Router()

router.get('/',async(req,res)=>{
    const snapshot = await Bairros.get()
    const list = snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}))
    res.send(list)
})

router.get('/:provincia',async(req,res)=>{
    const snapshot = await Bairros.get()
    const list = snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}))
    const provincia = req.params.provincia.toLowerCase();
    //console.log(stringify(provincia))
    var result = list.filter(obj => {
        var id = obj.id.toLowerCase();
        id = id.replace(" ",'_')
        console.log(id)
        
        return id == provincia
    })
    
    res.send(result)
    // res.send(list[1]["id"])
})



module.exports = router