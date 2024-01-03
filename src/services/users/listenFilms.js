const { knexdb } = require("../../db/conection");
const { schemaListen } = require("../../utils/users/schemaListen");

async function listenFilms(dataFilm) {
    const { name } = dataFilm;

    try {

        await schemaListen.validateAsync(dataFilm);
        const consulta = knexdb('nometabela');

    } catch (error) {
        return await (error.message)
    }
}

module.exports = { listenFilms };

// const { knexdb } = require("../../db/conection");
// const { schemaListen } = require("../../utils/users/schemaListen");

// async function listenFilms(dataFilm) {
//     const { name } = dataFilm;

//     try {
//         await schemaListen.validateAsync(dataFilm);
//         const consulta = knexdb('nometabela');

//         // Aqui você pode adicionar a lógica de processamento dos dados e retornar o resultado
//         // por exemplo, const result = await consulta...

//         return { success: true, data: result, statusCode: 200 }; // Retornar dados em caso de sucesso

//     } catch (error) {
//         return { success: false, error: error.message, statusCode: 400 }; // Retornar erro em caso de falha na validação
//     }
// }

// module.exports = { listenFilms };