const { listenFilms } = require("../../services/users/listenFilms");

async function listen(req, res) {
    const { data, error, statusCode } = await listenFilms(req.body);

    if (error) return res.status(statusCode).json({ messagem: error });


    console.log(data);
    return res.status(200).json(data);
}

module.exports = { listen };