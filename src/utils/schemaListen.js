const Joi = require("joi");

exports.schemaListen = Joi.object({
    name: Joi.string().required().messages({
        'any.required': "The 'name' field is required",
        'string.empty': "The field 'name' is mandatory!"
    }),
})