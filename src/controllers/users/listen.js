const { listenFilms } = require("../../services/users/listenFilms");

async function listen(req, res) {
    const { error, data } = await listenFilms(req.body);

    if (error) return res.status(error.code).json({
        mensagem: error.message
    });
    return res.status(200).json(data);
};

module.exports = { listen };