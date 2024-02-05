const Joi = require("joi");

exports.schemaListen = Joi.object({
    brandId: Joi.number()
        .positive()
        .messages({
            'number.positive': "The 'brandId' field must be a positive integer"
        }),
    name: Joi.string()
        .max(20)
        .required()
        .messages({
            'any.required': "The 'name' field is required",
            'string.empty': "The field 'name' is mandatory!",
            'string.max': "The 'name' field must not exceed 20 characters",
        }),
});
