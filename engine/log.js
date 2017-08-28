import winston from 'winston'

const log = new (winston.Logger)({
  transports: [
    new (winston.transports.Console)({
      colorize: true,
      timestamp: true,
      level: 'verbose',
      humanReadableUnhandledException: true,
      json: false
    })
  ],
  exitOnError: true
})

export { log }
