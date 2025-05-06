import { ItemRepository } from '../../domain/repositories/item.repository'
import { Item } from '../../domain/entities/item.entity'
import { UpdateItemDTO } from '../dtos/update-item.dto'

export class UpdateItemHandler {
  constructor(private readonly itemRepository: ItemRepository) { }

  async execute(id: number, data: UpdateItemDTO): Promise<Item> {
    const item = await this.itemRepository.findById(id)

    if (!item) {
      throw new Error(`Item with ID "${id}" not found`)
    }

    if (data.name !== undefined) {
      item.updateName(data.name)
    }

    if (data.price !== undefined) {
      item.updatePrice(data.price)
    }

    return this.itemRepository.update(item)
  }
}