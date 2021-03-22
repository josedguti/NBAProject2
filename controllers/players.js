const Player = require('../models/player');
const Team = require('../models/team');

function newPlayer(req, res) {
    Player.find({}, function(err, players) {
        res.render('players/new', {
            title: 'Add Player', 
            players
        });
    });
}

function create(req, res) {
    Player.create(req.body, function(err) {
        res.redirect('/players/new');
    });
}

function addToLineUp(req, res) {
    Team.findById(req.params.id, function(err, team) {
       team.lineup.push(req.body.playerId);
       team.save(function(err) {
           res.redirect(`/teams/${team._id}`);
       });
    });
}

module.exports = {
    new: newPlayer,
    create,
    addToLineUp,
};