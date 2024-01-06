const { knexdb } = require("../db/conection");
const { schemaListen } = require("../utils/schemaListen");

async function listenFilms(dataFilm) {
    const { name } = dataFilm;
    try {

        await schemaListen.validateAsync(dataFilm);
        const modelsResult = await knexdb('models')
            .select('models.name as modelName')
            .select(knexdb.raw('ARRAY_AGG(compatiblemodels.compatible_models) as compatibleModels'))
            .leftJoin('compatiblemodels', 'models.id', '=', 'compatiblemodels.models_id')
            .where(builder => {
                builder.where('models.name', name)
                    .orWhere('compatiblemodels.compatible_models', name);
            })
            .groupBy('models.name');

        if (modelsResult.length < 1) return { error: "Película não encontrada!", statusCode: 404 };
        const consultModels = modelsResult[0].compatiblemodels;

        if (consultModels.length < 2) {
            const twoConsult = modelsResult[0].modelName;

            const modelsResult2 = await knexdb('models')
                .select('models.name as modelName')
                .select(knexdb.raw('ARRAY_AGG(compatiblemodels.compatible_models) as compatibleModels'))
                .leftJoin('compatiblemodels', 'models.id', '=', 'compatiblemodels.models_id')
                .where(builder => {
                    builder.where('models.name', twoConsult)
                        .orWhere('compatiblemodels.compatible_models', twoConsult);
                })
                .groupBy('models.name');

            return { success: true, data: modelsResult2, statusCode: 200 };
        }

        return { success: true, data: modelsResult, statusCode: 200 };

    } catch (error) {
        const statusCode = (error.statusCode || 400);
        return { success: false, error: error.message, statusCode };
    }
}

module.exports = { listenFilms };