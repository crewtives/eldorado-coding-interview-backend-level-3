export const logger = {
    info: (message: string, ...optionalParams: any[]) => {
        console.log(`[INFO] ${message}`, ...optionalParams)
    },
    error: (message: string, ...optionalParams: any[]) => {
        console.error(`[ERROR] ${message}`, ...optionalParams)
    },
    debug: (message: string, ...optionalParams: any[]) => {
        if (process.env.DEBUG === 'true') {
            console.debug(`[DEBUG] ${message}`, ...optionalParams)
        }
    }
}