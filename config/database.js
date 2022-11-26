const parse = require('pg-connection-string').parse;

module.exports = ({ env }) => {

  if(env('NODE_ENV') === 'production') {
    return {
      defaultConnection: 'default',
      connections: {
        default: {
          connector: 'bookshelf',
          settings:{
            client: 'postgres',
            host: config.host,
            port: config.port,
            database: config.database,
            username: config.user,
            password: config.password
          },
          options: {
            ssl: false
          }
        }
      }
 }
  }

};