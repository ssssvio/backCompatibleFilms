require("dotenv").config();
const express = require("express");
const cors = require('cors');
const app = express();

const users = require('./routes/users');

app.use(cors({
    origin: 'https://sincc.netlify.app' // Substitua pelo URL do seu frontend no Netlify
}));

app.use(cors());
app.use(express.json());
app.use(users.routes);

app.listen(process.env.PORT);