const port = process.env.PORT || 8080;
const host = process.env.HOST || '127.0.0.1';
const express = require("express");
const bodyParser = require('body-parser');
//const sanitizeHtml = require('sanitize-html');

const app = express();

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE, PUT");
    next();
});


const clientsRoutes = require('./Routes/ClientsRoute');


//Criação de rotas estáticas
app.use('./assets', express.static ('assets'));
app.use('./views', express.static ('views'));

const audits = require('./Routes/ClientsRoute');

app.use('/', clientsRoutes);

// Server connection
app.listen(port, (err) => {
    if (!err) {
        console.log(`Server runing at http://${host}:${port}`);
    } else console.log(err);
});

module.exports = app;
