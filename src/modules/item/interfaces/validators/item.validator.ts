import { ValidationException } from "../../../../shared/exceptions/validation.exception"

export type ItemInput = {
    name?: string
    price?: number
}

export class ItemValidator {
    static validateCreate(input: ItemInput) {
        const errors = []

        if (!input.name) {
            errors.push({ field: 'name', message: 'Field "name" is required' })
        }

        if (input.price === undefined) {
            errors.push({ field: 'price', message: 'Field "price" is required' })
        } else if (input.price < 0) {
            errors.push({ field: 'price', message: 'Field "price" cannot be negative' })
        }

        if (errors.length) {
            throw new ValidationException(errors, 400)
        }
    }

    static validateUpdate(input: ItemInput) {
        const errors = []

        if (input.price !== undefined && input.price < 0) {
            errors.push({ field: 'price', message: 'Field "price" cannot be negative' })
        }

        if (errors.length) {
            throw new ValidationException(errors, 400)
        }
    }
}
