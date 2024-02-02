const { listenFilms } = require("../services/listenFilms");

async function listen(req, res) {
    const { data, error, statusCode } = await listenFilms(req.body);
    console.log(error);
    console.log(data);
    console.log(statusCode);
    if (error) return res.status(statusCode).json({ message: error });
    return res.status(statusCode).json(data);
}

module.exports = { listen };