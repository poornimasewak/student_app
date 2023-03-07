const sequelize =require('../config/connection');
const studentsList = require('./students.json');
const Student = require('../models/student')


sequelize.sync({ force: true }).then(data=>{
   Student.bulkCreate(studentsList)
   .then(data=>{
    console.log("All data seeded");
   })
})