const router = require('express').Router();
const { Ratings } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => { //Meant to add a rating
    try {
        const newRating = await Ratings.create({
            user_id: req.body.id,
            album_id: req.body.album_id,
            rating: req.body.rating,
        });
        res.status(200),json(newRating);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.delete('/:id', withAuth, async (req, res) => {
    try {
        const ratingData = await Ratings.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });

        if (!ratingData) {
            res.status(400).json({ message: 'No project found with this id!' });
            return;
        }
        res.status(200).json(ratingData);
        
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;