module.exports = function(app) {
    const userModel = require('../models/user/user.model.server');

    app.post('/api/register', createUser);
    app.get('/api/user/:uid', findUserById);

    async function createUser(req, res) {
        const newUser = req.body;
        const data = await userModel.createUser(newUser);
        res.json(data);
    }

    async function findUserById(req, res) {
        const userId = req.params['uid'];
        const data = await userModel.findUserById(userId);
        res.json(data);
    }
}
