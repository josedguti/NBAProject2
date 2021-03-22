const Team = require('../models/team');

function create(req, res) {
    Team.findById(req.params.id, function (err, team) {
        team.comments.push(req.body);
        team.save(function (err) {
            res.redirect(`/teams/${team._id}`);
        });
    });
}

module.exports = {
    create,
};