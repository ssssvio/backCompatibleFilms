const { listenFilms } = require("../../services/users/listenFilms");

async function listen(req, res) {
    const { error, data } = await listenFilms(req.body);
    if (error) return res.status(error.code).json({
        mensagem: error.message
    });
    return res.status(200).json(data);
};

module.exports = { listen };

// const { listenFilms } = require("../../services/users/listenFilms");

// async function listen(req, res) {
//     const { success, data, error, statusCode } = await listenFilms(req.body);

//     return res.status(statusCode).json({
//         success: success,
//         data: data,
//         mensagem: error // Retorna a mensagem de erro do serviço
//     });
// }

// module.exports = { listen };