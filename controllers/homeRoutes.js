const router = require('express').Router();
const { Album, Ratings, User } = require('../models');
const withAuth = require('../utils/auth');

// ROUTE: /

//----allows you to view all albums----//
router.get('/albums', async (req, res) => {

    try {
        // Get all albums and JOIN with ratings data***
        const albumData = await Album.findAll({
          include: [
            {
              model: Ratings,
              attributes: ['rating'],
            },
          ],
        });

        // Sort albums by number in descending order
        const sortedAlbums = albumData.sort((a, b) => a.Number - b.Number);
    
        // Serialize data so the template can read it
        const albums = sortedAlbums.map((album) => album.get({ plain: true }));
    
        // Pass serialized data and session flag into template
        res.render('homepage', { 
          albums, 
          logged_in: req.session.logged_in 
        });
      } catch (err) {
        console.log(egitrr);
        res.status(500).json(err);
      }
});

//----allows you to view a single album with comments----//
router.get('/albums/:id', async (req, res) => {

    try {
        const albumData = await Album.findByPk(req.params.id, {
          include: [
            {
              model: Ratings,
              attributes: [
                'rating',
                'user_id',
                'createdAt',
                ],
                include: [
                    {
                        model: User,
                        attributes: ['username'],
                    },
                ],
            },
          ],
        });

        const albums = albumData.get({ plain: true });

        res.render('album', {
          ...albums,
          logged_in: req.session.logged_in
        });
      } catch (err) {
        res.status(500).json(err);
      }
});

//----allows you to view all albums you've rated----//
router.get('/profile', withAuth, async (req, res) => {

    try {
        // Get all albums and JOIN with ratings data***
        const albumData = await Album.findAll({
            include: [
                {
                  model: Ratings,
                  where: {
                    user_id: req.session.user_id
                  },       
                include: [
                    {
                        model: User,
                        attributes: ['username'],
                    },
                ],
                },
              ],
        });
    
        // Serialize data so the template can read it
        const albums = albumData.map((album) => album.get({ plain: true }));
    
        // Pass serialized data and session flag into template
        res.render('profile', { 
          albums, 
          logged_in: req.session.logged_in 
        });
      } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
});

//----allows you to view all ratings with albums associated----//
router.get('/ratings/', async (req, res) => {

  try {
      const ratingsData = await Ratings.findByPk(req.params.rating_group, { //check ratings group
        include: [
          {
            model: Album,
            attributes: [
              'Year',
              'Album',
              'Artist',
              'Genre',
              'Subgenre',
              ],
          },
        ],
      });

      // Serialize data so the template can read it
      const ratings = ratingsData.map((rating) => rating.get({ plain: true }));

      res.render('rating', { //check handlebars name
        ratings,
        logged_in: req.session.logged_in
      });
    } catch (err) {
      res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {

    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });
  
  module.exports = router;