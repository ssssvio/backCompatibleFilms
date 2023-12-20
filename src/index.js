require("dotenv").config();
const express = require("express");
const app = express();

const users = require('./routes/users');

app.use(express.json());
app.use(users.routes);


app.listen(process.env.PORT || 3001, () => {
    console.log(`Listen port: ${process.env.PORT}`);
});