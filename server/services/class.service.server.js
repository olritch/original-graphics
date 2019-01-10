module.exports = function(app) {
    const classModel = require('../models/class/class.model.server');

    app.get('/api/class', getClasses);
    app.post('/api/class', createClass);

    async function getClasses(req, res) {
        const date = req.query['date']
        const data = await classModel.getClasses(date);
        res.json(data);
    }

    async function createClass(req, res) {
        const course = req.body;
        // console.log(course)
        const data = await classModel.createClass(course);
        res.json(data);
    }

}
