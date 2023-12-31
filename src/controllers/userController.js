const {User, Show} = require('../../models/index')

module.exports = {
    getAllUsers: async (req, res) => {
        try {
            const users = await User.findAll()
            return res.json(users)
        } catch(error) {
            next(error)
        }
    },
    getUserById: async (req, res) => {
        try {
            const user = await User.findByPk(req.params.id);
            if (user) {
                return res.json(user);
            } else {
                return res.status(404).json({ error: 'User not found' });
            }
        } catch(error) {
            next(error)
        }
    },
    getUserShows: async (req, res) => {
        try {
            const user = await User.findByPk(req.params.id, {include: Show})
            if (user) {
                return res.json(user.shows);
            } else {
                return res.status(404).json({ error: 'User not found' });
            }
        } catch(error) {
            next(error)
        }
    },
    addUserShow: async (req, res) => {
        try {
            const user = await User.findByPk(req.params.userId)
            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }
            const shows = await user.getShows()
            if (shows.some(show => show.id === parseInt(req.params.showId))){
                return res.status(409).json({ error: 'Watched show already exists for user' });
            }
            await user.addShow(req.params.showId);
            return res.json('Show added');
        } catch(error) {
            next(error)
        }
    }
}