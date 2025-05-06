import { Server } from '@hapi/hapi'
import { registerItemRoutes } from './modules/item/interfaces/http/item.routes'

export const defineRoutes = (server: Server) => {
    server.route({
        method: 'GET',
        path: '/ping',
        handler: async () => ({ ok: true }),
    })

    registerItemRoutes(server)
}