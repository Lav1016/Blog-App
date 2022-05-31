const express = require('express');
const router = express.Router();
const CommentController = require('../Controller/comments-controller')

//addComments
router.post('/addComments',CommentController.addComments)

//removeOneComments
router.delete('/deleteComments',CommentController.commentsDelete)



module.exports = router;