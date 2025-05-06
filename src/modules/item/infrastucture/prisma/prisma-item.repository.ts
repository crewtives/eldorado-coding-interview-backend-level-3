import { ItemRepository } from '../../domain/repositories/item.repository'
import { Item } from '../../domain/entities/item.entity'
import { prisma } from '../../../../config/prisma'

export class PrismaItemRepository implements ItemRepository {
    async create(item: Item): Promise<Item> {
        const data = await prisma.item.create({
            data: {
                name: item.name,
                price: item.price,
            },
        })

        return new Item(data)
    }

    async update(item: Item): Promise<Item> {
        const data = await prisma.item.update({
            where: { id: item.id },
            data: {
                name: item.name,
                price: item.price,
                updatedAt: item.updatedAt,
            },
        })

        return new Item(data)
    }

    async findById(id: string): Promise<Item | null> {
        const data = await prisma.item.findUnique({ where: { id } })
        return data ? new Item(data) : null
    }

    async findAll(): Promise<Item[]> {
        const items = await prisma.item.findMany()
        return items.map((item) => new Item(item))
    }

    async delete(id: string): Promise<void> {
        await prisma.item.delete({ where: { id } })
    }
}