// require express so that we can build an express app
var express = require('express');
// require path so we can use path functions --> also used for static
var path = require('path');
// instantiate the app
var app = express();
// set up a static ifle server that points to the "client" directory
app.use(express.static(path.join(__dirname, './client')));
// This line requires and runs the code from out mongoose.js file --> USED FOR DATABASE
require('./server/config/mongoose.js');
// this line requires and runs the code from our routes.js file and passes it app so that we can attach our routing rules to our express application!
require('./server/config/routes.js')(app);

app.listen(5000, function() {
    console.log('     /////////////////');
    console.log('    ///           ///');
    console.log('   ///   PORT    ///');
    console.log('  ///    5000   ///');
    console.log(' ///           ///');
    console.log('/////////////////');
});