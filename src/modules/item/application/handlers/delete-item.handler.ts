import { ItemRepository } from '../../domain/repositories/item.repository'

export class DeleteItemHandler {
  constructor(private readonly itemRepository: ItemRepository) {}

  async execute(id: string): Promise<void> {
    const item = await this.itemRepository.findById(id)

    if (!item) {
      throw new Error(`Item with ID "${id}" not found`)
    }

    await this.itemRepository.delete(id)
  }
}