const express = require('express');
const router = express.Router();
const commentsCtrl = require('../controllers/comments');

router.post('/teams/:id/comments', commentsCtrl.create);
router.delete('/teams/:id/comments', commentsCtrl.delete);

module.exports = router;