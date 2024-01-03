// const { listenFilms } = require("../../services/users/listenFilms");
const { schemaListen } = require("../../utils/users/schemaListen");

async function listen(req, res) {

    try {
        await schemaListen.validateAsync(req.body);
        return res.status(200).json({ message: 'ata' })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
    // const { error, data } = await listenFilms(req.body);
    // return res.status(200).json(data);
    // if (error) return res.status(error.code).json({
    //     mensagem: error.message
    // });
};

module.exports = { listen };