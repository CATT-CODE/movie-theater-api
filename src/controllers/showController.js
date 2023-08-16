const { Show, User } = require("../../models");
const { Op } = require("sequelize");

module.exports = {
    getAllShows: async (req, res) => {
        const shows = await Show.findAll()
        res.json(shows)
    },
    getShowById: async (req, res) => {
        const show = await Show.findByPk(req.params.id);
        if (show) {
            res.json(show);
        } else {
            res.status(404).json({ error: 'Show not found' });
        }
    },
    getShowsByGenre: async (req, res) => {
        const show = await Show.findAll({where: {genre: { [Op.like]: `%${req.params.genre}%` }}});
        if (show.length) {
            res.json(show);
        } else {
            res.status(404).json({ error: `Shows with ${req.params.genre} genre not found` });
        }
    },
}