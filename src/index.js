require("dotenv").config();
const express = require("express");
const cors = require('cors');
const app = express();

const users = require('./routes/users');

const corsOptions = {
    origin: 'https://sincc.netlify.app',
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(users.routes);

app.listen(process.env.PORT);