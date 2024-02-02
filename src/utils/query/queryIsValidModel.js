const { knexdb } = require("../../db/conection");

async function isValidModel(brandId, name) {
    return knexdb('models')
        .leftJoin('compatiblemodels', 'models.id', '=', 'compatiblemodels.models_id')
        .where(builder => {
            builder.where('models.name', name)
                .orWhere('compatiblemodels.compatible_models', name);
            if (brandId) {
                builder.andWhere('models.brand_id', brandId);
            }
        })
        .first();
}

module.exports = { isValidModel };
