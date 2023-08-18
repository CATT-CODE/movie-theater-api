const router = require('express').Router();
const { getAllUsers, getUserById, addUserShow, getUserShows } = require('../controllers/userController');

router.get('/', getAllUsers);

router.get('/:id', getUserById);

router.get('/:id/shows', getUserShows);

router.put('/:userId/shows/:showId', addUserShow);

module.exports = router; 