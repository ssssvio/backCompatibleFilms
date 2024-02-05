const { listenFilms } = require("../services/listenFilms");

async function listen(req, res) {
    const { success, data, error, statusCode } = await listenFilms(req.body);

    if (error) {
        return res.status(statusCode).json({ success, message: error });
    }

    return res.status(statusCode).json({ success, data });
}

module.exports = { listen };
