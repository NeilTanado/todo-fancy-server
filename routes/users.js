/*jshint esversion:6*/

var express = require('express');
var router = express.Router();
const Controller = require('../controller/createUser');



router.get('/',(req,res)=>{
  res.send('halo')
})

router.post('/createuser', Controller.createId);

router.get('/datauser',Controller.readUser);

router.put('/updateuser/:id',Controller.updateUser);

router.delete('/deleteuser/:id',Controller.deleteUser);

router.post('/carisatuan',Controller.findSatuan);

router.post('/login',Controller.signin);

router.post('/createfacebook',Controller.facebookLog);

router.post('/loginfacebook',Controller.loginPesbuk);

module.exports = router;

//5aee997c4c7f0304adb8f5c7
