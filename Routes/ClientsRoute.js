const router = require('express').Router();
const { body, validationResult } = require('express-validator');
const controllerClients = require('../Controllers/ClientsController');

// Visualizar Users
router.get('/clients', function (req, res) {
    controllerClients.listClients(req, res)
});

router.post('/clients/addClient', function (req, res) {
    controllerClients.addClient(req, res)
});

module.exports = router;