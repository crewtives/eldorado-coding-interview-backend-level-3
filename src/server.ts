import Hapi from '@hapi/hapi'
import { defineRoutes } from './routes'
import { logger } from './shared/logger'

import Inert from '@hapi/inert'
import Vision from '@hapi/vision'
import HapiSwagger from 'hapi-swagger'

const getServer = () => {
    const server = Hapi.server({
        host: '0.0.0.0',
        port: 3000,
    })

    defineRoutes(server)

    return server
}

export const initializeServer = async () => {
    const server = getServer()

    await server.register([
        Inert,
        Vision,
        {
            plugin: HapiSwagger,
            options: {
                info: {
                    title: 'Eldorado API Documentation',
                    version: "1.0.0",
                },
                grouping: 'tags',
                documentationPath: '/docs',
            },
        },
    ])

    await server.initialize()
    return server
}

export const startServer = async () => {
    const server = await initializeServer()
    await server.start()
    logger.info(`✅ Server running on ${server.info.uri}`)
    logger.info(`📖 API documentation available at ${server.info.uri}/docs`)
    return server
}