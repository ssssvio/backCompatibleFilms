const express = require("express");
const { listen } = require("../controllers/listen");
const routes = express.Router();

routes.post('/', listen);

module.exports = {
    routes
}