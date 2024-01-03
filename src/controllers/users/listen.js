const { listenFilms } = require("../../services/users/listenFilms");

async function listen(req, res) {
    const { data, error, statusCode } = await listenFilms(req.body);

    if (error) return res.status(statusCode).json({ messagem: error });

    return res.status(200).json(data.compatiblefilms);
}

module.exports = { listen };