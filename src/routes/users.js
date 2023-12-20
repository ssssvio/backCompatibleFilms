const express = require("express");
const { listen } = require("../controllers/users/listen");
const routes = express.Router();

routes.get('/peliculas', listen);

module.exports = {
    routes
}