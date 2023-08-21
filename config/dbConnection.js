const { Sequelize } = require("sequelize")
const database = "express"
const username = "root"
const password = ""

const connectDB = () => {
    const sequelize = new Sequelize(
        database,
        username,
        password, 
        {
            host: "localhost",
            dialect: 'mysql'
        }
    )
    
    sequelize.authenticate().then(() => {
        console.log("Connection has been established successfully")
    }).catch((error) => {
        console.log("Unable to connect to the database: ", error)
    })
}

module.exports = connectDB