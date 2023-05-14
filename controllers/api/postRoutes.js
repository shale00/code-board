const router = require('express').Router();
const { User, Posts } = require('../../models');

//Get all posts including respective User data
router.get('/posts', async (req, res) => {
    try {
        const userPost = await Posts.findAll({
            include: [{ model: User }]
        });
        res.status(200).json(userPost);
    } catch (err) {
        res.status(500).json(err)
    }
});

//Get all users including respective post data (to move or remove from this file)
router.get('/users', async (req, res) => {
    try {
        const userPost = await User.findAll({
            include: [{ model: Posts }]
        });
        res.status(200).json(userPost);
    } catch (err) {
        res.status(500).json(err)
    }
});

//Create a new post 
//should look something like this:
// {
//     "body": "I am interested in a job: Web-Dev",
//     "user_id": 3
// }
router.post('/posts', async (req, res) => {
    try {
        const userPost = await Posts.create(req.body);
        res.status(200).json(userPost);
    } catch (err) {
        res.status(500).json(err);
    }
});








module.exports = router;