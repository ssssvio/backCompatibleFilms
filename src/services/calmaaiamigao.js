if (!modelsResult || modelsResult.length === 0) {
    const compatibleModelsResult = await knexdb('compatiblemodels')
        .select('models.name as modelName', 'compatiblemodels.compatible_models as compatibleModels')
        .leftJoin('models', 'models.id', '=', 'compatiblemodels.models_id')
        .where('compatiblemodels.compatible_models', name);

    if (!compatibleModelsResult || compatibleModelsResult.length === 0) {
        return { error: "Película não encontrada!", statusCode: 404 };
    }

    const groupedModels = compatibleModelsResult.reduce((acc, item) => {
        if (!acc[item.modelName]) {
            acc[item.modelName] = { modelName: item.modelName, compatibleModels: [] };
        }
        acc[item.modelName].compatibleModels.push(item.compatibleModels);
        return acc;
    }, {});

    const result = Object.values(groupedModels);
    return { success: true, data: result, statusCode: 200 };
}
