import { Request, ResponseToolkit } from '@hapi/hapi'
import { createItemHandler, listItemsHandler, getItemHandler, updateItemHandler, deleteItemHandler } from '../../item.module';
import { ItemNotFoundException } from '../../domain/exceptions/item-not-found.exception'
import { ValidationException } from '../../../../shared/exceptions/validation.exception';
import { toItemResponse } from '../mappers/item.mapper';
import { ItemValidator } from '../validators/item.validator';

export const createItem = async (request: Request, h: ResponseToolkit) => {
    try {
        const payload = request.payload as { name: string; price: number }
        ItemValidator.validateCreate(payload);
        const item = await createItemHandler.execute(payload)
        return h.response(toItemResponse(item)).code(201)
    } catch (error) {
        if (error instanceof ValidationException) {
            return h.response({ errors: error.errors }).code(error.statusCode)
        }

        console.error('[ERROR] createItem:', error)
        return h.response({ message: 'Internal server error' }).code(500)
    }
}

export const listItems = async (_request: Request, h: ResponseToolkit) => {
    try {
        const items = await listItemsHandler.execute()
        return h.response(items.map(toItemResponse)).code(200)
    } catch (error) {
        console.error('[ERROR] listItems:', error)

        if (error instanceof ValidationException) {
            return h.response({ errors: error.errors }).code(error.statusCode)
        }

        return h.response({ message: 'Internal server error' }).code(500)
    }
}


export const getItem = async (request: Request, h: ResponseToolkit) => {
    try {
        const { id } = request.params as { id: string }
        const numericId = Number(id)
        const item = await getItemHandler.execute(numericId)
        return h.response(toItemResponse(item)).code(200)
    } catch (error) {
        if (error instanceof ItemNotFoundException) {
            return h.response({ message: error.message }).code(404)
        }

        console.error('[ERROR] getItem:', error)
        return h.response({ message: 'Internal server error' }).code(500)
    }
}

export const updateItem = async (request: Request, h: ResponseToolkit) => {
    try {
        const { id } = request.params as { id: string }
        const numericId = Number(id)
        const payload = request.payload as { name?: string; price?: number };
        ItemValidator.validateUpdate(payload);
        const updated = await updateItemHandler.execute(numericId, payload)
        return h.response(toItemResponse(updated)).code(200)
    } catch (error) {
        console.error('[ERROR] updateItem:', error)
        if (error instanceof ValidationException) {
            return h.response({ errors: error.errors }).code(error.statusCode)
        }
        return h.response({ message: 'Internal server error' }).code(500)
    }
}

export const deleteItem = async (request: Request, h: ResponseToolkit) => {
    try {
        const { id } = request.params as { id: string }
        const numericId = Number(id)
        await deleteItemHandler.execute(numericId)
        return h.response().code(204)
    } catch (error) {
        console.error('[ERROR] deleteItem:', error)
        if (error instanceof ValidationException) {
            return h.response({ errors: error.errors }).code(error.statusCode)
        }
        return h.response({ message: 'Internal server error' }).code(500)
    }
}