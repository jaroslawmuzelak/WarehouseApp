import express from "express";
import path from 'path';

let router = express.Router();


router.get('/', function(req, res){
    res.sendFile(path.join(__dirname+'../../../web/index.html'));
});


export = router;