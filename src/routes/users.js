const express = require("express");
const routes = express.Router();

routes.get('/peliculas', true);

module.exports = {
    routes
}