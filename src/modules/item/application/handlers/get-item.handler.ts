import { Item } from '../../domain/entities/item.entity'
import { ItemNotFoundException } from '../../domain/exceptions/item-not-found.exception'
import { ItemRepository } from '../../domain/repositories/item.repository'

export class GetItemHandler {
  constructor(private readonly itemRepository: ItemRepository) { }

  async execute(id: number): Promise<Item> {
    const item = await this.itemRepository.findById(id)

    if (!item) {
      throw new ItemNotFoundException()
    }

    return item
  }
}