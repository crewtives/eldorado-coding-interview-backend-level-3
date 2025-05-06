import Hapi from '@hapi/hapi'
import { defineRoutes } from './routes'
import { logger } from './shared/logger'

const getServer = () => {
    const server = Hapi.server({
        host: 'localhost',
        port: 3000,
    })

    defineRoutes(server)

    return server
}

export const initializeServer = async () => {
    const server = getServer()
    await server.initialize()
    return server
}

export const startServer = async () => {
    const server = getServer()
    await server.start()
    logger.info(`✅ Server running on ${server.info.uri}`)
    return server
}