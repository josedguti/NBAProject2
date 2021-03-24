const team = require('../models/team');
const Team = require('../models/team');

function create(req, res) {
    Team.findById(req.params.id, function (err, team) {
        team.comments.push(req.body);
        team.save(function (err) {
            res.redirect(`/teams/${team._id}`);
        });
    });
}

function deleteComment(req, res) {
    Team.findByIdAndDelete(req.params.id, function(err, comment) {
        res.redirect(`/teams/${team._id}`);
    });
}

// function deleteTeam(req, res) {
//     Team.findByIdAndDelete(req.params.id, function(err, team) {
//         res.redirect('/teams');
//     });
// }

module.exports = {
    create,
    delete: deleteComment,
};