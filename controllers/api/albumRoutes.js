const router = require('express').Router();
const { Album } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    try {
        const newAlbum = await Album.create({
            ...req.body,
             user_id: req.session.user_id,
        });
        res.status(200),json(newAlbum);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;