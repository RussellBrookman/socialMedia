var authController = require('../controllers/authcontroller.js');

module.exports = function(app) {
    app.get('/', function(req, res) {
        res.render('splash')
    });

}
