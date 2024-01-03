const Joi = require("joi");

exports.schemaListen = Joi.object({
    name: Joi.string().required().messages({
        'any.required': 'O campo name é obrigatório!',
        'string.empty': 'O campo name deve ser preenchido!'
    }),
})