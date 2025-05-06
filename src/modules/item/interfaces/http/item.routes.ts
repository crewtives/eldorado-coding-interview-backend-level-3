import { Server } from '@hapi/hapi'
import {
    createItem,
    listItems,
    getItem,
    updateItem,
    deleteItem,
} from '../controllers/item.controller'
import { createItemSchema, itemIdParam, updateItemSchema } from '../schema/item.schema'
import { validationErrorHandler } from '../../../../shared/utils/validation-error-handler'

export const registerItemRoutes = (server: Server) => {
    server.route([
        {
            method: 'GET',
            path: '/items',
            handler: listItems,
            options: {
                tags: ['api'],
                description: 'List all items',
            },

        },
        {
            method: 'GET',
            path: '/items/{id}',
            handler: getItem,
            options: {
                tags: ['api'],
                description: 'Get item by ID',
                validate: {
                    params: itemIdParam,
                },
            },
        },
        {
            method: 'POST',
            path: '/items',
            handler: createItem,
            options: {
                tags: ['api'],
                description: 'Create a new item',
                validate: {
                    payload: createItemSchema,
                    failAction: validationErrorHandler,
                },
            },
        },
        {
            method: 'PUT',
            path: '/items/{id}',
            handler: updateItem,
            options: {
                tags: ['api'],
                description: 'Update an item',
                validate: {
                    params: itemIdParam,
                    payload: updateItemSchema,
                    failAction: validationErrorHandler,
                },
            },
        },
        {
            method: 'DELETE',
            path: '/items/{id}',
            handler: deleteItem,
            options: {
                tags: ['api'],
                description: 'Delete an item',
                validate: {
                    params: itemIdParam,
                    failAction: validationErrorHandler,
                },
            },
        },
    ])
}