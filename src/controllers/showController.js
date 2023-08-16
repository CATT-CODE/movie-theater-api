const { Show, User } = require("../../models");
const { Op } = require("sequelize");

module.exports = {
    getAllShows: async (req, res) => {
        try {
            const shows = await Show.findAll();
            return res.json(shows);
        } catch (error) {
            next(error)
        }
    },
    getShowById: async (req, res) => {
        try {
            const show = await Show.findByPk(req.params.id);
            if (show) {
                return res.json(show);
            } else {
                return res.status(404).json({ error: 'Show not found' });
            }
        } catch (error) {
            next(error)
        }
    },
    getShowsByGenre: async (req, res) => {
        try {
            const shows = await Show.findAll({ where: { genre: { [Op.like]: `%${req.params.genre}%` } } });
            if (shows.length) {
                return res.json(shows);
            } else {
                return res.status(404).json({ error: `Shows with ${req.params.genre} genre not found` });
            }
        } catch (error) {
            next(error)
        }
    },
    updateShowRating: async (req, res) => {
        try {
            const show = await Show.findByPk(req.params.id);
            if (show) {
                show.rating = req.body.rating;
                await show.save();
                return res.json(show);
            } else {
                return res.status(404).json({ error: 'Show not found' });
            }
        } catch (error) {
            next(error)
        }
    },
    updateShowStatus: async (req, res) => {
        try {
            const show = await Show.findByPk(req.params.id);
            if (show) {
                show.status = req.body.status;
                await show.save();
                return res.json(show);
            } else {
                return res.status(404).json({ error: 'Show not found' });
            }
        } catch (error) {
            next(error)
        }
    },
    deleteShow: async (req, res) => {
        try {
            const show = await Show.findByPk(req.params.id);
            if (show) {
                let title = show.title;
                await show.destroy();
                return res.json(`Show ${title} deleted`);
            } else {
                return res.status(404).json({ error: 'Show not found' });
            }
        } catch (error) {
            next(error)
        }
    }
    
}