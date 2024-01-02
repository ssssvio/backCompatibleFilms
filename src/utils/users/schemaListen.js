const Joi = require("joi");

exports.schemaListen = Joi.object({
    nome: Joi.string().required().messages({
        'any.required': 'O campo nome é obrigatório!',
        'string.empty': 'O campo nome deve ser preenchido!'
    }),
})