module.exports = function(app) {
    const classModel = require('../models/class/class.model.server');

    app.get('/api/class', getClasses);
    app.post('/api/class', createClass);
    app.delete('/api/class', deleteClass);

    async function getClasses(req, res) {
        const date = req.query['date']
        const data = await classModel.getClasses(date);
        res.json(data);
    }

    async function createClass(req, res) {
        const course = req.body;
        const data = await classModel.createClass(course);
        res.json(data);
    }

    async function deleteClass(req, res) {
        const cid = req.body;
        // console.log(cid);
        const data = await classModel.deleteClass(cid);
        res.json(data);
    }

}
