const { knexdb } = require("../db/conection");
const { schemaListen } = require("../utils/schemaListen");

async function listenFilms(dataFilm) {
    const { name } = dataFilm;
    try {

        await schemaListen.validateAsync(dataFilm);
        const consult = await knexdb('films').where({ name }).orWhere('compatiblefilms', 'like', `%${name}%`).first();
        if (!consult) return { error: "Película não encontrada!", statusCode: 404 };
        const compatibles = consult.compatiblefilms.split('-');
        return { success: true, data: compatibles, statusCode: 200 };

    } catch (error) {
        const statusCode = (error.statusCode || 400);
        return { success: false, error: error.message, statusCode };
    }
}

module.exports = { listenFilms };