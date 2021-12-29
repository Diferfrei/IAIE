const router = require('express').Router();
const { body, validationResult } = require('express-validator');
const controllerClients = require('../Controllers/ClientsController');

// Visualizar Users
router.get('/clients', function (req, res) {
    controllerClients.listClients(req, res)
});

module.exports = router;