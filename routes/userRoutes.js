const express=require('express')
const userController=require('../controller/userController')
const router=express.Router();

router.post('/register',userController.register)
router.post('/login',userController.login)
router.post('/logout',userController.logout)
router.get('/:id',userController.getUser)

module.exports=router