export class ValidationException extends Error {
    public readonly errors: { field: string; message: string }[]
    public readonly statusCode: number

    constructor(errors: { field: string; message: string }[], statusCode = 400) {
        super('Validation failed')
        this.errors = errors
        this.statusCode = statusCode
    }
}