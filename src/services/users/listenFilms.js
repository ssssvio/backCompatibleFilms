const { knexdb } = require("../../db/conection");
const { schemaListen } = require("../../utils/users/schemaListen");

async function listenFilms(dataFilm) {
    const { name } = dataFilm;

    try {

        await schemaListen.validateAsync(dataFilm);
        // const consult = knexdb('qualquercoisa');

        return { success: true, data: true, statusCode: 200 };

    } catch (error) {
        return { success: false, error: error.message, statusCode: 400 };
    }
}

module.exports = { listenFilms };