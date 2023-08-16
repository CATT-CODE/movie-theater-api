const { getAllShows, getShowById, getShowsByGenre, updateShowRating, updateShowStatus, deleteShow } = require('../controllers/showController');
let router = require('express').Router();

router.get('/', getAllShows);

router.get('/:id', getShowById);

router.get('/genres/:genre', getShowsByGenre);

router.put('/:id/rating', updateShowRating);

router.put('/:id/status', updateShowStatus);

router.delete('/:id/delete', deleteShow);

module.exports = router;