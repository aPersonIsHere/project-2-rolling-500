const router = require('express').Router();
const { Album } = require('../../models');
 const withAuth = require('../../utils/auth');

 router.post('/', withAuth, async (req, res) => { //Creates a new album??? 
     try {
        const newAlbum = await Album.create({
            Number: req.body.number,
            Year: req.body.year,
             Album: req.body.album,
            Artist: req.body.artist,
             Genre: req.body.genre,
             Subgenre: req.body.subgenre,
         });
         res.status(200),json(newAlbum);
     } catch (err) {
         res.status(400).json(err);
     }
 });

 module.exports = router;
 
 router.put('/', async (req, res) => {
     try {
         const dbVoteData = await User.create({
             username: req.body.username,
            email: req.body.email,
             password: req.body.password,
         });

        req.session.save(() => {
             req.session.logged_in = true;
             res.status(200).json(dbUserData);
         });
     } catch (err) {
         console.log(err);
         res.status(500).json(err);
     }
 });
