const { knexdb } = require("../db/conection");

async function queryModelsByName(name) {
    return knexdb('models')
        .select('models.name as modelName')
        .select(knexdb.raw('ARRAY_AGG(compatiblemodels.compatible_models) as compatibleModels'))
        .leftJoin('compatiblemodels', 'models.id', '=', 'compatiblemodels.models_id')
        .where(builder => {
            builder.where('models.name', name)
                .orWhere('compatiblemodels.compatible_models', name);
        })
        .groupBy('models.name');
};
