const router = require('express').Router();
const { body, validationResult } = require('express-validator');
const controllerClients = require('../Controllers/ClientsController');

// Visualizar Users
router.get('/clients', controllerClients.listClients);
router.post('/clients/addClient', controllerClients.addClient);

module.exports = router;