const router = require('express').Router();
const { User, Posts } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {
    const userPost = await Posts.findAll({
        include: [{ model: User, attributes: { exclude: ['password'] } }]
    });

    const posts = userPost.map((project) => project.get({ plain: true }));
    console.log(posts);
    
    res.render('homepage', {
            posts,
            logged_in: req.session.logged_in,
          });
  } catch (err) {
      res.status(500).json(err)
  }
});

// router.get('/', async (req, res) => {
//   try {
//     const userData = await User.findAll({
//       attributes: { exclude: ['password'] },
//       order: [['name', 'ASC']],
//     });

//     const users = userData.map((project) => project.get({ plain: true }));

//     res.render('homepage', {
//       users,
//       logged_in: req.session.logged_in,
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/posts', async(req, res) => { // added post route
  try {
    const postData = await Posts.findAll();

    const posts = postData.map((post) => project.get({ plain: true }));

    res.render('homepage', {
      users,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
})

module.exports = router;
