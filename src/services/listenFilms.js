const { knexdb } = require("../db/conection");
const { schemaListen } = require("../utils/schemaListen");

async function listenFilms(dataFilm) {
    const { name } = dataFilm;
    try {

        await schemaListen.validateAsync(dataFilm);

        const modelsResult = await knexdb('models')
            .select('models.name as modelName', 'compatiblemodels.compatible_models as compatibleModels')
            .leftJoin('compatiblemodels', 'models.id', '=', 'compatiblemodels.models_id')
            .where('models.name', name);


        return { success: true, data: modelsResult, statusCode: 200 };

    } catch (error) {
        const statusCode = (error.statusCode || 400);
        return { success: false, error: error.message, statusCode };
    }
}

module.exports = { listenFilms };