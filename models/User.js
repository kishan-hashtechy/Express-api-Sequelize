const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("../config/dbConnection")

const User  = sequelize.define('User', {
    firstname: {
        type: DataTypes.STRING,
        allowNull: false
    },

    lastname: {
        type: DataTypes.STRING,
        allowNull: false
    },

    email: {
        type: DataTypes.STRING,
        allowNull: false
    },

    password: {
        type: DataTypes.STRING,
        allowNull: false
    },

    mobile: {
        type: DataTypes.STRING,
        allowNull: false
    },  

    city: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = User