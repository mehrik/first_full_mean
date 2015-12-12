// This is our routes.js file located in server/config/routes.js
// This is where we will define all of our routing rules!
// We will have to require this in the server.js file (and pass it app!)
// able to use the friends.js functions from the controller
var friends = require('./../controllers/friends.js');
var bodyParser = require('body-parser');
module.exports = function(app) {
    app.use(bodyParser.urlencoded());
    // Use bodyParser.json to read the received data from the client
    app.use(bodyParser.json());
    app.get('/friends', function (req, res) {
        friends.show(req, res);
    });
    app.post('/create_friend', function (req, res) {
        console.log(req.body.name);
        console.log(req.body.age);
        friends.create(req, res);
    });
    app.post('/remove_friend', function (req, res) {
        console.log(req.body);
        friends.delete(req, res);
    });
}