const express = require('express');
const {Update,Delete,fetch,create}=require('./controller/itemcontrol')
const route = express.Router();
route.post('/create',create);
route.get('/fetch',fetch);
route.put('/update/:id',Update);
route.delete('/delete/:id',Delete);
module.exports=route