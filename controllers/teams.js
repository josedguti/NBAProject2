const Team = require('../models/team');
const Player = require('../models/player');

function index(req, res) {
    Team.find({}, function(err, teams) {
        res.render('teams/index', { title: 'All Teams', teams });
    });
}

function show(req, res) {
    Team.findById(req.params.id).populate('lineup').exec(function(err, team) {
        Player.find({_id: {$nin: team.lineup }}, function(err, players) {
            res.render('teams/show', { title: 'Team Detail', team, players });
        });
    });
}

function newTeam(req, res) {
    res.render('teams/new', { title: 'Add Team' });
}

function create(req, res) {
    for (let key in req.body) {
        if (req.body[key] === "") delete req.body[key];
    }
    Team.create(req.body, function (err, team) {
        if (err) return res.redirect('/teams/new');
        res.redirect(`/teams/${team._id}`);
    });
}

function deleteTeam(req, res) {
    Team.findByIdAndDelete(req.params.id, function(err, team) {
        res.redirect('/teams');
    });
}

function edit(req, res) {
    Team.findById(req.params.id, function(err, team) {
        res.render('teams/edit', {
            title: 'Edit Team',
            team,
            teamId: req.params.id,
        });
    });
}

function update(req, res) {
    Team.findByIdAndUpdate(req.params.id, req.body, function(err, team) {
        res.redirect('/teams/' + req.params.id);
    });
}


module.exports = {
    index,
    show,
    new: newTeam,
    create,
    delete: deleteTeam,
    edit,
    update,
};