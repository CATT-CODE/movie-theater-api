const { getAllShows, getShowById, getShowsByGenre, updateShowRating, updateShowStatus, deleteShow } = require('../controllers/showController');
const { validateShowStatus, validateShowRating } = require('../middlewares/showMiddleware');
let router = require('express').Router();

router.get('/', getAllShows);

router.get('/:id', getShowById);

router.get('/genres/:genre', getShowsByGenre);

router.put('/:id/rating',validateShowRating, updateShowRating);

router.put('/:id/status', validateShowStatus, updateShowStatus);

router.delete('/:id/delete', deleteShow);

module.exports = router;