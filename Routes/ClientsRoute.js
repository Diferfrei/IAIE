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
router.put(
    "/clients/updateClient/:vat&:number&:name&:address&:zip_code&:city&:email&:phone&:notes",
  controllerClients.updateClient
);

module.exports = router;
