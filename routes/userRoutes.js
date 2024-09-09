const express=require('express')
const userController=require('../controller/userController')
const {validation, validate} =require('../validations/index')
const router=express.Router();

router.post('/register',validation.register(),validate,userController.register)
router.post('/login',validation.login(),validate,userController.login)
router.post('/logout',userController.logout)
router.get('/:id',userController.getUser)


module.exports=router