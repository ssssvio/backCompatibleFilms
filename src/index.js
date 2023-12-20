require("dotenv").config();

const express = require("express");
const app = express();

app.use(express.json());

app.listen(process.env.PORT || 3001, () => {
    console.log(`Listen port: ${process.env.PORT}`);
})