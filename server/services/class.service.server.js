module.exports = function(app) {
    const classModel = require('../models/class/class.model.server');

    app.get('/api/class/date', getClassesOnDate);
    app.get('/api/class', getClassByTitleAndDate);
    app.post('/api/class', createClass);
    app.delete('/api/class', deleteClass);

    async function getClassesOnDate(req, res) {
      const date = req.query['date']
      const data = await classModel.getClassByDate(date)
      res.json(data)
    }

    async function getClassByTitleAndDate(req, res) {
        const title = req.query['title'];
        const date = req.query['date'];
        const data = await classModel.getClassByTitleAndDate(title, date);
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
