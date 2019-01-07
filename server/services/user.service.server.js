module.exports = function(app) {
    const userModel = require('../models/user/user.model.server');

    app.post('/api/user', createUser);

    async function createUser(req, res) {
        const newUser = req.body;
        const data = await userModel.createUser(newUser);
        res.json(data);
    }
}
