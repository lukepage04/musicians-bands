const {Sequelize, sequelize} = require('./db');

// TODO - define the Band model
class Band extends Sequelize.Model {}
    Band.init({
    name: Sequelize.STRING,
    genre: Sequelize.STRING,
    yearFormed: Sequelize.INTEGER
    }, 
{ sequelize, modelName: 'band' });

module.exports = {
    Band
};