import { PrismaItemRepository } from './infrastucture/prisma/prisma-item.repository'

import { CreateItemHandler } from './application/handlers/create-item.handler'
import { GetItemHandler } from './application/handlers/get-item.handler'
import { ListItemsHandler } from './application/handlers/list-items.handler'
import { UpdateItemHandler } from './application/handlers/update-item.handler'
import { DeleteItemHandler } from './application/handlers/delete-item.handler'

const itemRepository = new PrismaItemRepository()

export const createItemHandler = new CreateItemHandler(itemRepository)
export const getItemHandler = new GetItemHandler(itemRepository)
export const listItemsHandler = new ListItemsHandler(itemRepository)
export const updateItemHandler = new UpdateItemHandler(itemRepository)
export const deleteItemHandler = new DeleteItemHandler(itemRepository)