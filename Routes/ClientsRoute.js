const router = require('express').Router();
const { body, validationResult } = require('express-validator');
const controllerClients = require('../Controllers/ClientsController');

// Routes
router.get('/clients', controllerClients.listClients);
router.post('/clients/addClient', controllerClients.addClient);
router.delete('/clients/deleteClient', controllerClients.deleteClient);

module.exports = router;