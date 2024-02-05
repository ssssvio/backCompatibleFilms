const { schemaListen } = require("../utils/schemaListen");
const { isValidModel } = require("../utils/query/queryIsValidModel");
const { queryModelsByName } = require("../utils/query/queryModelsByName");
const { notFoundError, successStatusCode, notFoundModel } = require("../utils/err/errors");

async function listenFilms(dataFilm) {
    const { brandId, name } = dataFilm;

    try {

        const upName = name.toUpperCase();
        await schemaListen.validateAsync({ name });

        const checkBrandAndModel = await isValidModel(brandId, upName);
        if (!checkBrandAndModel || checkBrandAndModel.brand_id !== brandId) {
            return { error: notFoundModel.message, statusCode: notFoundModel.statusCode };
        }

        const modelsResult = await queryModelsByName(upName);
        if (!modelsResult) return { error: notFoundError.message, statusCode: notFoundError.statusCode };

        const consultModels = modelsResult.compatiblemodels;
        if (consultModels.length < 2) {
            const reModelName = modelsResult.modelName.toUpperCase();
            const reModelsResult = await queryModelsByName(reModelName); s
            if (!reModelsResult) return { error: notFoundError.message, statusCode: notFoundError.statusCode };
            return { success: true, data: reModelsResult, statusCode: successStatusCode };
        }

        return { success: true, data: modelsResult, statusCode: successStatusCode };

    } catch (error) {
        const statusCode = error.statusCode || 400;
        return { success: false, error: error.message, statusCode };
    }
}

module.exports = { listenFilms };