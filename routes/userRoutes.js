const express=require('express')
const userController=require('../controller/userController')
const {validation} =require('../validations/index')
const router=express.Router();

router.post('/register',validation.register(),userController.register)
router.post('/login',validation.login(),userController.login)
router.post('/logout',userController.logout)
router.get('/:id',userController.getUser)


module.exports=router