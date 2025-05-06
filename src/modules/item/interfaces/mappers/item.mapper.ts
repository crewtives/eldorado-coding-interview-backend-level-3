import { Item } from '../../domain/entities/item.entity'

export const toItemResponse = (item: Item) => ({
    id: item.id,
    name: item.name,
    price: item.price
})

export const toItemListResponse = (items: Item[]) => items.map(toItemResponse)