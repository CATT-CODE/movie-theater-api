const { getAllShows, getShowById, getShowsByGenre } = require('../controllers/showController');
let router = require('express').Router();

router.get('/', getAllShows);

router.get('/:id', getShowById);

router.get('/genre/:genre', getShowsByGenre);


module.exports = router;