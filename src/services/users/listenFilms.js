const { knexdb } = require("../../db/conection");
const { schemaListen } = require("../../utils/users/schemaListen");

async function listenFilms(dataFilm) {
    const { name } = dataFilm;

    try {

        await schemaListen.validateAsync(dataFilm);

        const consult = await knexdb('films').where({ name }).first();

        // if (!consult) return error = { message: "Película não encontrada", statusCode: 404 };

        return { success: true, data: consult, statusCode: 200 };

    } catch (error) {
        return { success: false, error: error.message, statusCode: statusCode || 400 };
    }
}

module.exports = { listenFilms };