'use strict'
const { Sequelize, DataTypes } = require("sequelize");

const DATABASE_URL = process.env.NODE_ENV === 'test' ? 'sqlite:memory:' : process.env.DATABASE_URI;

// let sequelizeOptions = process.env.NODE_ENV === 'production' ? {//in the production we will take these options
//     dialectOptions:{ssl:{ require:true, rejectUnauthorized:false  } } } : {};else if process.env.NODE_ENV === 'test', we will not have any options

//now also then we need to spacifi the sequelize new instance that is taking the url and the option so we can use it in the connection of the database
let sequelize = new Sequelize(DATABASE_URL, {}); //new instanse from Sequelize//Sequelize should be require from Sequelize above in first


const User = require('./users.model')
// const userModel = sequelize(sequelize, DataTypes);

module.exports ={
    db:sequelize, //the database that I will do connect to it and its the sequilize(because its taken the option and taken the link(DATABASE_URL))
    User:User(sequelize, DataTypes)  
}
