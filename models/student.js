const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
// const bcrypt = require('bcrypt')

class Student extends Model { }

Student.init(
    {
        name: {
            type: DataTypes.STRING
        },
        course: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        phone:{
            type: DataTypes.STRING
        },
        username:{
            type: DataTypes.STRING,
            unique:true
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'student',
    }
);

module.exports = Student;
