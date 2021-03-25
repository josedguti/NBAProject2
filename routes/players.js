const express = require('express');
const router = express.Router();
const playersCtrl = require('../controllers/players');


require('../authenticate');
router.get('/players/new', checkAuth, playersCtrl.new);
router.post('/players', checkAuth, playersCtrl.create);
router.post('/teams/:id/players', checkAuth, playersCtrl.addToLineUp);

function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({
        msg: "Not Authorized!"
    });
}

module.exports = router;