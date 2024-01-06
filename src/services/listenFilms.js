const { queryModelsByName } = require("../utils/queryConsult");
const { schemaListen } = require("../utils/schemaListen");

async function listenFilms(dataFilm) {
    const { name } = dataFilm;

    try {

        await schemaListen.validateAsync(dataFilm);
        const modelsResult = await queryModelsByName(name);
        if (modelsResult.length < 1) return { error: "Película não encontrada!", statusCode: 404 };

        const consultModels = modelsResult[0].compatiblemodels;
        if (consultModels.length < 2) {
            const twoConsult = modelsResult[0].modelName;
            const modelsResult2 = await queryModelsByName(twoConsult);
            return { success: true, data: modelsResult2, statusCode: 200 };
        }

        return { success: true, data: modelsResult, statusCode: 200 };

    } catch (error) {
        const statusCode = error.statusCode || 400;
        return { success: false, error: error.message, statusCode };
    }
}

module.exports = { listenFilms };