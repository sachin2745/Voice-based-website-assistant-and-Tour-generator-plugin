const express = require('express');
const router = express.Router();

router.get('/add',(req, res)=>{
    res.send('Post Add Opertaion');
});
router.get('/getall',(req, res)=>{
    res.send('Post Read Opertaion');
});


module.exports=router;