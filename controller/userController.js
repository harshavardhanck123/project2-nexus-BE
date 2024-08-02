const User=require('../models/user.js')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../utils/config.js');
const mongoose=require('mongoose')

const userController={
    register:async(req,res)=>{
        try{
            const {email,password,name}=req.body;
            const hash=await bcrypt.hash(password,10)
            const newUser=new User({email,password:hash,name})
            await newUser.save()
            res.status(201).json({newUser,success:true});
        }
        catch(error){
            res.status(400).json({error:error.message})
        }
    },
    login:async(req,res)=>{
        try{
            const {email,password}=req.body;
            const user=await User.findOne({email})
            if(!user)
            {
                return res.status(404).json({ message: 'User not found' });
            }
            const isValid=await bcrypt.compare(password,user.password)
            if(!isValid)
                return res.status(404).json({message: 'Invalid credentials'})
            
            const token = jwt.sign({ id: user._id, role: user.role }, config.JWT_SECRET, { expiresIn: '1d' });
            res.json({  
                message:'Login Successfull',
                token,
                user:{
                    id: user._id,
                    name: user.name,
                    email: user.email
                }
            })
        }
        catch(error){
            res.status(400).json({error:error.message})
        }
    },
    logout: async (req, res) => {
        try {
            res.clearCookie('token');
            res.json({ message: 'Logout Successful' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
      },
      getUser:async(req,res)=>{
        try{
            const {id}=req.params
            if(!id)
            {
                return res.status(404).json({ message: 'User not found' });
            }
            const user=await User.findById(id)
            res.json({  
                user:{
                    id: user._id,
                    name: user.name,
                }
            })

        }
        catch(error){
            res.status(500).json({message:error.message})
        }
      }
}

module.exports=userController