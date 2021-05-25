const router = require('express').Router();
const pizzaRoutes = require('./pizza-routes');
const commentRoutes = require('./comment-routes');




// add prefix of `/pizzas` to routes created in `pizza-routes.js`
router.use('/pizzas', pizzaRoutes);
router.use('/comments', commentRoutes);

module.exports = router;

// 60ad52b0fe0426e72da4e3b4 comment id
// 60abf34c4f015ed344e063fd pizza id