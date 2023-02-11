const express = require('express');
const router = express.Router();
const multer = require('multer');


const userController = require('../controller/userController');

//configuracion de multer
const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        let name = path.resolve(__dirname, '../../public/images/user')
        cb(null, name)
    },

    filename: (req, file, cb)=>{
        let filename = 'user-' + Date.now() + path.extname(file.originalname)
        cb(null, filename)
    }
})

const upload = multer ({storage})

router.get('/login',userController.login);
router.get('/register',userController.register);
router.get('/admin',userController.see);


module.exports = router
