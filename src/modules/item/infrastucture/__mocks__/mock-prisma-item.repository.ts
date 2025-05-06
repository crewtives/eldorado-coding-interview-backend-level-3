import { ItemRepository } from '../../domain/repositories/item.repository'
import { Item } from '../../domain/entities/item.entity'

export class MockPrismaItemRepository implements ItemRepository {
    private items: Item[] = []
    private idCounter = 1

    async create(item: Item): Promise<Item> {
        const newItem = new Item({
            ...item,
            id: this.idCounter++,
            name: item.name,
            price: item.price,
            createdAt: item.createdAt ?? new Date(),
            updatedAt: item.updatedAt ?? new Date(),
        })
        this.items.push(newItem)
        return newItem
    }

    async update(item: Item): Promise<Item> {
        const index = this.items.findIndex(i => i.id === item.id)
        if (index === -1) throw new Error('Item not found')
        this.items[index] = item
        return item
    }

    async findById(id: number): Promise<Item | null> {
        return this.items.find(i => i.id === id) ?? null
    }

    async findAll(): Promise<Item[]> {
        return [...this.items]
    }

    async delete(id: number): Promise<void> {
        this.items = this.items.filter(i => i.id !== id)
    }

    reset() {
        this.items = []
        this.idCounter = 1
    }
}