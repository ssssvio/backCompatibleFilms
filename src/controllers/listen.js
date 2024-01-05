const { listenFilms } = require("../services/listenFilms");

async function listen(req, res) {
    const { data, error, statusCode } = await listenFilms(req.body);
    if (error) return res.status(statusCode).json({ message: error });
    return res.status(statusCode).json(data);
}

module.exports = { listen };