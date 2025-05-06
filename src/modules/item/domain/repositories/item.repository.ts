import { Item } from "../entities/item.entity"

export interface ItemRepository {
  create(item: Item): Promise<Item>
  update(item: Item): Promise<Item>
  findById(id: string): Promise<Item | null>
  findAll(): Promise<Item[]>
  delete(id: string): Promise<void>
}