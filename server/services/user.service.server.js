module.exports = function (app) {
    const userModel = require('../models/user/user.model.server');
    const passport = require('passport');
    const LocalStrategy = require('passport-local').Strategy;
    const bcrypt = require('bcrypt-nodejs');

    passport.serializeUser(serializeUser);
    passport.use(new LocalStrategy(localStrategy));


    app.post('/api/register', register);
    app.get('/api/user/id', findUserById);
    app.get('/api/user', findUser);
    app.post('/api/login', passport.authenticate('local'), login);
    app.post("/api/logout", logout);
    app.post("/api/loggedIn", loggedIn);
    app.put('/api/user', updateUser);
    app.get('/api/userClasses', getUserWithClasses);
    app.put('/api/interests', addInterest);

    async function addInterest(req, res) {
        const uid = req.query['uid'];
        const interests = req.query['interests'];
        const data = await userModel.addInterest(uid, interests);
        res.json(data);
    }


    async function getUserWithClasses(req, res) {
        const userId = req.query['uid'];
        const data = await userModel.populateClasses(userId);
        res.json(data);
    }

    function serializeUser(user, done) {
        done(null, user);
    }

    passport.deserializeUser(deserializeUser);

    function deserializeUser(user, done) {
        userModel.findUserById(user._id).then(
            function (user) {
                done(null, user)
            },
            function (err) {
                done(err, null);
            }
        )
    }

    async function localStrategy(username, password, done) {
        const data = await userModel.findUserByUsername(username);
        if (data && bcrypt.compareSync(password, data.password)) {
            return done(null, data);
        } else {
            return done(null, false);
        }
    }


    async function register(req, res) {
        const newUser = req.body;
        newUser.password = bcrypt.hashSync(newUser.password);
        const data = await userModel.createUser(newUser);
        req.login(data, function(err) {
            res.json(data);
        });
    }

    async function findUserById(req, res) {
        const userId = req.body;
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

    function login(req, res) {
        const user = req.user;
        res.json(user);
    }

    function logout(req, res) {
        req.logOut();
        res.sendStatus(200);
    }

    function loggedIn(req, res) {
        res.send(req.isAuthenticated() ? req.user : '0');
    }

    async function updateUser(req, res) {
        const user = req.body;
        const uid = user._id;
        const data = await userModel.updateUser(uid, user);
        res.json(data);
    }
}
