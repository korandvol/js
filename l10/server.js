var express = require("express");
var bodyParser = require("body-parser");

var server = express();

server.use(express.static(__dirname));
server.use(bodyParser.urlencoded({ 
    extended: true
}));
server.use(bodyParser.json());

server.get("/", function (request, response) {
    console.log('Server started!');
});

server.get("/userGet", function (request, response) {
    console.log(request.query);
    var obg = request.query;
    console.log(obg.userName += '.validatedByGet');
    console.log(obg.userAge += '.validatedByGet');
    response.send('Data :' + JSON.stringify(obg));
    console.log('Data is loaded GET method');
});

server.post("/formPost", function (req, resp) {
    console.log("Form receipted by POST.");
    // console.log(JSON.parse(req.query));
    var obj = req.body;
    console.log(obj.lName += ".ValidatedByPOST");
    console.log(obj.fName += ".ValidatedByPOST");
    console.log(obj.age += ".ValidatedByPOST");
    console.log(obj.address += ".ValidatedByPOST");
    resp.send(obj);
});

server.listen(3001);
