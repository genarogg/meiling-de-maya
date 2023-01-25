const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/leasing', function (req, res) {
    res.render('./leasing');
});

app.get('/', function (req, res) {
    res.render('./creditoVehicular');
});

app.listen(8080);
