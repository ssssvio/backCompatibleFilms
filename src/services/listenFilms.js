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

        const consult = modelsResult[0].compatiblemodels[0];
        console.log(typeof consult);
        // if (modelsResult.compatiblemodels === 1) {
        //     console.log(true);
        // }

        if (modelsResult.length < 1) return { error: "Película não encontrada!", statusCode: 404 };
        return { success: true, data: modelsResult, statusCode: 200 };

    } catch (error) {
        const statusCode = (error.statusCode || 400);
        return { success: false, error: error.message, statusCode };
    }
}

module.exports = { listenFilms };