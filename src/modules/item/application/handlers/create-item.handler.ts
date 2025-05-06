import { CreateItemDTO } from '../dtos/create-item.dto'
import { Item } from '../../domain/entities/item.entity'
import { ItemRepository } from '../../domain/repositories/item.repository'

export class CreateItemHandler {
  constructor(private readonly itemRepository: ItemRepository) { }

  async execute(data: CreateItemDTO): Promise<Item> {
    const item = new Item({
      name: data.name,
      price: data.price,
    })

    return this.itemRepository.create(item)
  }
}