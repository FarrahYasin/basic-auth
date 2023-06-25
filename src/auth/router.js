'use strict';
const express = require('express');
const router = express.Router();

const { User } = require('./models');
const base64 = require('base-64');
const bcrypt = require('bcrypt');
const basicAuthMiddleWare = require('./middleware/basic');

router.post('/signup', handelSignup);//for signup

async function handelSignup(req,res){
  req.body.password= await bcrypt.hash(req.body.password,10);
  const record = await User.create(req.body);
  res.status(201).json(record);
}

router.post('/signin',basicAuthMiddleWare, handelSignin); //for login

async function handelSignin(req,res){
  res.status(200).json(req.user);
}


router.get('/allUsers', handelAllUsers);//to get all users in the system
async function handelAllUsers(req,res){
  const allUsers=await User.findAll();
  res.status(200).json(allUsers)
}


module.exports=router;

// async function handelSignin(req,res){
    // console.log(req.body)
//   console.log(req.headers.authorization);

//   if (req.headers.authorization) {
//     const authData = req.headers.authorization.split(' ');
//     //way2// console.log(authData[1])
//     // const encodedData = authData[1];
//     const encodedData = authData.pop();//pop will remove the last element then returne it
//     const decodedData = base64.decode(encodedData);
//     // console.log(decodedData)
//     const [username, password] = decodedData.split(':');
//     const user = await User.findOne({ where: { username } });
//     // console.log(user)
//     const isValid = await bcrypt.compare(password, user.password)
//     // console.log(isValid)
//     if(isValid) {
//       res.status(200).json(user)
//     } else {
//       res.status(500).json({
//         message: 'This user is not Authorized!!!'
//       })
//     }
//   } else {
//     console.log('Please enter username and the password!!!!')
//   }
// }
    // const record = await User.create(req.body);
    // res.status(200).json(record);
// }
