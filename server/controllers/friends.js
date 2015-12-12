// this is our friends.js file located at /server/controllers/friends.js
// These two lines need to be at the top of our controller so that we can access our model through var Friend
// need to require mongoose to be able to run mongoose.model()
var mongoose = require('mongoose');
var Friend = mongoose.model('Friend');
// notice the immediate function and the object that is returned
// Notice how this is an immediate function
module.exports = (function() {
    return {
        show: function(req, res) {
            Friend.find({}, function (err, results) {
                if(err) {
                    console.log(err);
                } else {
                    res.json(results);
                }
            });
        },
        create: function(req, res) {
            // create a new friend using the model
            var friend = new Friend ({
                name: req.body.name,
                age: req.body.age
            });
            // save friend and check for errors
            friend.save(function (err) {
                if(err) {
                    console.log(err);
                    res.json(err);
                } else {
                    res.json();
                }
            });

        },
        delete: function(req, res) {
            Friend.remove({ _id: req.body._id }, function(err) {
                if(err) {
                    console.log(err);
                    res.json(err);
                } else {
                    res.json();
                }
            })
        }
    }
})();