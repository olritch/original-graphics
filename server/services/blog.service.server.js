module.exports = function(app) {
    const blogModel = require('../models/blog/blog.model.server');

    app.post('/api/blog', createComment);
    app.get('/api/blog', getComments);
    app.delete('/api/blog', deleteComment);

    async function createComment(req, res) {
        const comment = req.body;
        const data = await blogModel.createComment(comment);
        res.json(data);
    };

    async function getComments(req, res) {
        const data = await blogModel.getComments();
        res.json(data);
    }

    async function deleteComment(req, res) {
        const cid = req.body;
        const data = await blogModel.deleteComment(cid);
        res.json(data);
    }
}