// importing methods from comment-controller file
const router = require('express').Router();
const { addComment, removeComment } = require('../../controllers/comment-controller');

// /api/comment/:pizzaId
router.route('/:pizzaId').post(addComment);

// /api/comments/:pizzaId/:commentId
router.route('/:pizzaId/:commentId').delete(removeComment);

module.exports = router;