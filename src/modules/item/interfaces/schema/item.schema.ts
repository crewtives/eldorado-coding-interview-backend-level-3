import Joi from 'joi'

export const createItemSchema = Joi.object({
    name: Joi.string().required().messages({
        'any.required': 'Field "name" is required',
        'string.base': 'Field "name" must be a string',
    }),
    price: Joi.number().required().min(0).messages({
        'any.required': 'Field "price" is required',
        'number.base': 'Field "price" must be a number',
        'number.min': 'Field "price" cannot be negative',
    }),
})
export const updateItemSchema = Joi.object({
    name: Joi.string(),
    price: Joi.number().min(0).messages({
        'number.min': 'Field "price" cannot be negative',
    }),
})

export const itemIdParam = Joi.object({
    id: Joi.number().integer().required(),
})