import { ResponseToolkit } from '@hapi/hapi'

export function validationErrorHandler(_: any, h: ResponseToolkit, err: any) {
    const errors = err.details.map((detail: any) => ({
        field: detail.context.key,
        message: `Field "${detail.context.key}" ${detail.type === 'any.required' ? 'is required' : 'cannot be negative'}`,
    }))

    return h.response({ errors }).code(400).takeover()
}