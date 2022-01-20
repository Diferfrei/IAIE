const router = require("express").Router();
const { body, validationResult } = require("express-validator");
const controllerClients = require("../Controllers/ClientsController");

// Routes
router.get("/clients/all", controllerClients.listClients);
router.post(
  "/clients/addClient/:vat&:number&:name&:address&:zip_code&:city&:email&:phone&:notes",
  controllerClients.addClient
);
router.delete(
  "/clients/deleteClient/:customer_id",
  controllerClients.deleteClient
);

module.exports = router;
