const { knexdb } = require("../../db/conection");

async function listenFilms(dataFilm) {
    const { name } = dataFilm;

    try {

        if (!name) return {
            error: {
                code: 400,
                message: "Insira o nome da pelpicula!"
            }
        }

        const consulta = knexdb('nometabela');

    } catch (error) {
        return await (error.message)
    }
}

module.exports = { listenFilms };