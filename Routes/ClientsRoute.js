const router = require("express").Router();
const { body, validationResult } = require("express-validator");
const controllerClients = require("../Controllers/ClientsController");

// Routes
router.get("/clients/all", controllerClients.listClients);
router.post(
  "/clients/addClient/vat=:vat&number=:number&name=:name&address=:address&zip_code=:zip_code&city=:city&email=:email&phone=:phone&notes=:notes",
  controllerClients.addClient
);
router.delete(
  "/clients/deleteClient/:customer_id",
  controllerClients.deleteClient
);

module.exports = router;
