const { queryModelsByName } = require("../utils/queryConsult");
const { schemaListen } = require("../utils/schemaListen");

async function listenFilms(dataFilm) {
    const { name } = dataFilm;

    try {

        await schemaListen.validateAsync(dataFilm);
        const upName = name.toUpperCase();
        const modelsResult = await queryModelsByName(upName);
        if (!modelsResult) return { error: "Film not found!", statusCode: 404 };
        const consultModels = modelsResult.compatiblemodels;

        if (consultModels.length < 2) {
            const reModelName = modelsResult.modelName.toUpperCase();
            const reModelsResult = await queryModelsByName(reModelName);
            if (!reModelsResult) return { error: "Film not found!", statusCode: 404 };
            return { success: true, data: reModelsResult, statusCode: 200 };
        }

        return { success: true, data: modelsResult, statusCode: 200 };

    } catch (error) {
        const statusCode = error.statusCode || 400;
        return { success: false, error: error.message, statusCode };
    }
}

module.exports = { listenFilms };