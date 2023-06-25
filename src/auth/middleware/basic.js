'use strict';
const bcrypt = require('bcrypt');
const base64 = require('base-64');
const { User } = require('../models');
// const basicAuthMiddleWare = async (req, res, next) => {

    async function basicAuthMiddleWare(req, res, next){
    if(req.headers.authorization){
      const basicHeaderParts = req.headers.authorization.split(' ');
      const encodedValues= basicHeaderParts.pop(); // Basic alksndlaksndlaksd
      const decodedValues = base64.decode(encodedValues); // username:password
      const [username, password] = decodedValues.split(':');
      
      const user = await User.findOne({ where: { username } });
      const isValid = await bcrypt.compare(password, user.password);
      if (isValid) {
      // res.status(200).json(user);
        req.user = user;
        next();
      }
      else {
        throw new Error('this user is invalid');
      }
  }}
  module.exports = basicAuthMiddleWare;