const { knexdb } = require("../../db/conection");
const { schemaListen } = require("../../utils/users/schemaListen");

async function listenFilms(dataFilm) {
    const { name } = dataFilm;

    try {
        console.log(name);
        await schemaListen.validateAsync(dataFilm);
        // const consulta = knexdb('nometabela');

    } catch (error) {
        return await (error.message)
    }
}

module.exports = { listenFilms };