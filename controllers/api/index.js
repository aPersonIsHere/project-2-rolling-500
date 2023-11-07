const router = require('express').Router();
const userRoutes = require('./userRoutes');
const albumRoutes = require('./albumRoutes');
const ratingRoutes = require('./ratingRoutes');

router.use('/users', userRoutes); //This will be responsible for logging in, signing up, and logging off.
// router.use('/albums', albumRoutes); //This will be responsible for something with albums.
router.use('/ratings', ratingRoutes); //This will be responsible for voting on albums.

module.exports = router;
