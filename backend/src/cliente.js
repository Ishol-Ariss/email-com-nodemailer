const Sequelize = require("sequelize")
const database = require("./db.js")

const Clientes = database.define("Clientes",
{
    id_cliente:
    {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nome:
    {
        type: Sequelize.STRING(150),
        allowNull: false
    },
    email:
    {
        type: Sequelize.STRING(150),
        allowNull:false
    },
    createdAt:
    {
        type: Sequelize.DATE,
        allowNull: false
    }, 
    updatedAt:
    {
        type: Sequelize.DATE,
        allowNull: false
    }
})

module.exports = Clientes