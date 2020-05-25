module.exports = {
    sentryDsn: 'https://d0fca149b2114d8ea7378217a8fa5eb4@sentry.io/5191093',
    deployment: 'dev', // Change this to prod when building image! (This process is due for improvements)
    dataType: 'tsv',
    port: 80,
    debugLevel: -616,
    stackTrace: true,
    subDebugLevels: {
        database: 0,
        definitions: 0,
        resolvers: 0,
    }
}
