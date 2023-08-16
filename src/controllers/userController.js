const {User, Show} = require('../../models/index')

module.exports = {
    getAllUsers: async (req, res) => {
        const users = await User.findAll()
        res.json(users)
    },
    getUserById: async (req, res) => {
        const user = await User.findByPk(req.params.id);
        if (user) {
            res.json(user);
        } else {
            res.status(404).json({ error: 'User not found' });
        }
    },
    getUserShows: async (req, res) => {
        const user = await User.findByPk(req.params.id, {include: Show})
        if (user) {
            res.json(user.shows);
        } else {
            res.status(404).json({ error: 'User not found' });
        }
    },
    addUserShow: async (req, res) => {
        const user = await User.findByPk(req.params.userId, {include: Show})
        if (user) {
            if (!user.shows[req.params.showId]){
                user.addShow(req.params.showId);
                res.json("Show added");
            }
            res.status(409).json({ error: 'Watched show already exists for user' });
        } else {
            res.status(404).json({ error: 'User not found' });
        }
    }
}