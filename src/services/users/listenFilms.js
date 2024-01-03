const { knexdb } = require("../../db/conection");
const { schemaListen } = require("../../utils/users/schemaListen");

async function listenFilms(dataFilm) {
    const { name } = dataFilm;
    try {

        await schemaListen.validateAsync(dataFilm);
        const consult = await knexdb('films').where({ name }).first();
        if (!consult) return { error: "Película não encontrada", statusCode: 404 };
        return { success: true, data: consult, statusCode: 200 };

    } catch (error) {
        const statusCode = error.statusCode || 400;
        return { success: false, error: error.message, statusCode };
    }
}

module.exports = { listenFilms };