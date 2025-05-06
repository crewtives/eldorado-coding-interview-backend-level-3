import { Server } from '@hapi/hapi'
import {
    createItem,
    listItems,
    getItem,
    updateItem,
    deleteItem,
} from '../controllers/item.controller'

export const registerItemRoutes = (server: Server) => {
    server.route([
        {
            method: 'GET',
            path: '/items',
            handler: listItems,
        },
        {
            method: 'GET',
            path: '/items/{id}',
            handler: getItem,
        },
        {
            method: 'POST',
            path: '/items',
            handler: createItem,
        },
        {
            method: 'PUT',
            path: '/items/{id}',
            handler: updateItem,
        },
        {
            method: 'DELETE',
            path: '/items/{id}',
            handler: deleteItem,
        },
    ])
}