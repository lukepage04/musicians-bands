const { Sequelize, sequelize } = require('./db');

class Song extends Sequelize.Model {}

Song.init({
  title: Sequelize.STRING,
  year: Sequelize.INTEGER
}, { sequelize, modelName: 'song' });

module.exports = { Song };
