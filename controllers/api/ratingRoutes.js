// Imports
const router = require('express').Router();
const { Album, Ratings } = require('../../models');
const withAuth = require('../../utils/auth');

// Create new rating
router.post('/', withAuth, async (req, res) => { 
    try {
        const newRating = await Ratings.create({
            ...req.body,
            user_id: req.session.user_id,
        });

        await Album.calculateAverageRating(req.body.album_id);
        
        res.status(200).json(newRating);
    } catch (err) {
        res.status(400).json(err);
    }
});

// Delete rating data
router.delete('/:id', withAuth, async (req, res) => {
    try {
        const ratingData = await Ratings.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });

        if (!ratingData) {
            res.status(400).json({ message: 'No rating found with this id!' });
            return;
        }
        res.status(200).json(ratingData);
        
    } catch (err) {
        res.status(500).json(err);
    }
})

// Exports
module.exports = router;