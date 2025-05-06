export class Item {
  private readonly _id?: number
  private _name: string
  private _price: number
  private readonly _createdAt: Date
  private _updatedAt: Date

  constructor(params: {
    id?: number
    name: string
    price: number
    createdAt?: Date
    updatedAt?: Date
  }) {
    if (params.price < 0) {
      throw new Error("Price cannot be negative")
    }

    this._id = params?.id
    this._name = params.name
    this._price = params.price
    this._createdAt = params.createdAt ?? new Date()
    this._updatedAt = params.updatedAt ?? new Date()
  }

  get id() {
    return this._id
  }

  get name() {
    return this._name
  }

  get price() {
    return this._price
  }

  get createdAt() {
    return this._createdAt
  }

  get updatedAt() {
    return this._updatedAt
  }

  updateName(newName: string) {
    this._name = newName
    this._updatedAt = new Date()
  }

  updatePrice(newPrice: number) {
    if (newPrice < 0) throw new Error("Price cannot be negative")
    this._price = newPrice
    this._updatedAt = new Date()
  }

  toJSON() {
    return {
      id: this._id,
      name: this._name,
      price: this._price,
    }
  }
}