module.exports = function (app) {
    var users = require('../modules/user/user.controller');
    var billing = require("../modules/billing/billing.controller");

    //USER
    app.post('/users', users.create);
    app.put('/users/:userId', users.update);
    app.get('/users', users.findAll);
    app.get('/users/:userId', users.findOne);
    app.get('/users-email/:userEmail', users.findEmail);
    app.delete('/users/:userId', users.delete);
    app.post('/users-login', users.login);

    //Billing
    app.post('/billing', billing.create);
    app.get('/billing', billing.findAll);
    app.get('/billing-by-email/:userEmail', billing.findByEmail);
}