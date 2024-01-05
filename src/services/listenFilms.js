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

        // Usando map para transformar o resultado
        const transformedResult = modelsResult.reduce((acc, model) => {
            const existingModel = acc.find(item => item.modelName === model.modelName);

            if (existingModel) {
                existingModel.compatibleModels.push(model.compatibleModels);
            } else {
                acc.push({
                    modelName: model.modelName,
                    compatibleModels: [model.compatibleModels]
                });
            }

            return acc;
        }, []);

        return { success: true, data: transformedResult, statusCode: 200 };

    } catch (error) {
        const statusCode = (error.statusCode || 400);
        return { success: false, error: error.message, statusCode };
    }
}

module.exports = { listenFilms };