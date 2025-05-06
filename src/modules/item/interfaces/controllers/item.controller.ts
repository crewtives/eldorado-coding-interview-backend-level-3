import { Request, ResponseToolkit } from '@hapi/hapi'
import { createItemHandler, listItemsHandler, getItemHandler, updateItemHandler, deleteItemHandler } from '../../item.module';

export const createItem = async (request: Request, h: ResponseToolkit) => {
    const { name, price } = request.payload as { name: string; price: number }
    const item = await createItemHandler.execute({ name, price })
    return h.response(item).code(201)
}

export const listItems = async (_request: Request, h: ResponseToolkit) => {
    const items = await listItemsHandler.execute()
    return h.response(items).code(200)
}

export const getItem = async (request: Request, h: ResponseToolkit) => {
    const { id } = request.params as { id: string }
    const item = await getItemHandler.execute(id)
    return h.response(item).code(200)
}

export const updateItem = async (request: Request, h: ResponseToolkit) => {
    const { id } = request.params as { id: string }
    const { name, price } = request.payload as { name?: string; price?: number }
    const updated = await updateItemHandler.execute(id, { name, price })
    return h.response(updated).code(200)
}

export const deleteItem = async (request: Request, h: ResponseToolkit) => {
    const { id } = request.params as { id: string }
    await deleteItemHandler.execute(id)
    return h.response().code(204)
}