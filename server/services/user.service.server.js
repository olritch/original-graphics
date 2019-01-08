module.exports = function(app) {
    const userModel = require('../models/user/user.model.server');

    app.post('/api/register', createUser);
    app.get('/api/user/:uid', findUserById);
    app.get('/api/user', findUser);

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

    async function findUser(req, res) {
        const username = req.query['username'];
        const password = req.query['password'];
        if (username && password) {
            const data = await userModel.findUserByCredentials(username, password);
            res.json(data);
            return;
        }

        if (username) {
            const data = await userModel.findUserByUsername(username);
            res.json(data);
            return;
        }
    }

}
