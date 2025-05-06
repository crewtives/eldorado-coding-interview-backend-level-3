import { Item } from '../../domain/entities/item.entity'
import { ItemRepository } from '../../domain/repositories/item.repository'

export class GetItemHandler {
  constructor(private readonly itemRepository: ItemRepository) { }

  async execute(id: number): Promise<Item> {
    const item = await this.itemRepository.findById(id)

    if (!item) {
      throw new Error(`Item with ID "${id}" not found`)
    }

    return item
  }
}