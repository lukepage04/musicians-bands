const { Band } = require('./Band');
const { Musician } = require('./Musician');
const { Song } = require('./Song');

// Associate the models
Band.hasMany(Song);
Song.belongsTo(Band);


module.exports = {
    Band,
    Musician,
    Song
};