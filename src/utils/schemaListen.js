const Joi = require("joi");

exports.schemaListen = Joi.object({
    name: Joi.string()
        .max(20)
        .required()
        .messages({
            'any.required': "The 'name' field is required",
            'string.empty': "The field 'name' is mandatory!",
            'string.max': "The 'name' field must not exceed 20 characters"
        }),
});