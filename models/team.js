module.exports = {
    deleteOne,
    getOne,
    updateOne,
}


const mongoose = require('mongoose');
const teams = require('../controllers/teams');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    content: String
}, {
    timestamps: true,
});

const teamSchema = new Schema({
    teamname: {
        type: String,
        required: true
    },
    conference: {
        type: String,
        require: true
    },
    lineup: [{ type: Schema.Types.ObjectId, ref: 'Player' }],
    ranking: {
        type: Number,
        default: 0
    },
    comments: [commentSchema]
}, {
    timestamps: true
});

function getOne(id) {
    return teams[id];
}

function deleteOne(id) {
    teams.splice(id, 1);
}

function updateOne(id, updatedTeam) {
    teams.splice(id, 1, updatedTeam);
}

module.exports = mongoose.model('Team', teamSchema);



