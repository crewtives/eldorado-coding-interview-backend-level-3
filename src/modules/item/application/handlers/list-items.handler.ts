import { Item } from '../../domain/entities/item.entity'
import { ItemRepository } from '../../domain/repositories/item.repository'

export class ListItemsHandler {
  constructor(private readonly itemRepository: ItemRepository) {}

  async execute(): Promise<Item[]> {
    return this.itemRepository.findAll()
  }
}