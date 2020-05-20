// TODO: Turn this into an object class and expost to the apps core context
const { createLogger, format, transports, addColors } = require('winston');
const { combine, timestamp, printf, prettyPrint } = format;
const pkg = require('../package.json')

const logFormat = printf(info => {
  return `[${info.timestamp}-v${info.Version}-${info.Environment}] ${info.level}: ${info.message}`;
});


const logger = createLogger({
  level: 'info',
  format: logFormat,
  defaultMeta: { 
    Environment: process.env.NODE_ENV,
    Version: pkg.version
  },
  transports: [
    new transports.Console({
      format: combine(
        timestamp(),
        prettyPrint(),
        format.colorize(),
        logFormat,
      ) }),
    new transports.File({ filename: 'error.log', level: 'error' }),
    new transports.File({ filename: 'combined.log' })
  ]
})


addColors({
  error: 'red',
  warn: 'yellow',
  info: 'cyan',
  debug: 'green'
});


module.exports = logger