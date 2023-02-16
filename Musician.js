const {Sequelize, sequelize} = require('./db');

class Musician extends Sequelize.Model {}
    Musician.init({
        name: Sequelize.STRING,
        instrument: Sequelize.STRING,
        age: Sequelize.INTEGER}, 
        { sequelize, 
          modelName: 'musician' });

module.exports = {
    Musician
};