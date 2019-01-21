module.exports = function(app) {
    require('./services/user.service.server')(app);
    require('./services/blog.service.server')(app);
    require('./services/class.service.server')(app);
    require('./services/shop.service.server')(app);
    require('./services/reminder.service.server')(app);
    require('./models/models.server');
};
