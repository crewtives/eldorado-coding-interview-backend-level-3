import { startServer } from './server'
import { logger } from './shared/logger'

process.on('uncaughtException', (err) => {
    logger.error('Uncaught Exception', err)
})

process.on('unhandledRejection', (err) => {
    logger.error('Unhandled Rejection', err)
})

await startServer()
logger.info('🚀 Server started')