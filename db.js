const path = require('path');
const { Sequelize } = require('sequelize');

// TODO - create the new sequelize connection
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: path.join(__dirname, 'database.sqlite')
});

module.exports = {
    sequelize,
    Sequelize
};