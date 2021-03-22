const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const playerSchema = new Schema({
    playername: {type: String, require: true, unique: true},
    position: String,
}, {
    timestamps: true
});

module.exports = mongoose.model('Player', playerSchema);
