export class ItemNotFoundException extends Error {
    public readonly statusCode = 404

    constructor(message: string = 'Item not found') {
        super(message)
    }
}