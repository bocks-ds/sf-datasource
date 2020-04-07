module.exports = {
    sentryDsn: 'https://d0fca149b2114d8ea7378217a8fa5eb4@sentry.io/5191093',
    deployment: 'prod', // Change this to prod when building image! (This process is due for improvements)
    debugLevel: 0,
    port: 80,
    subDebugLevels: {
        definitions: 0,
        database: 0,
        resolvers: 0,
    }
}