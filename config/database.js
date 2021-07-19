module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'mysql',
        host: env('DATABASE_HOST', 'erick-server2.mysql.database.azure.com'),
        port: env.int('DATABASE_PORT', 3306),
        database: env('DATABASE_NAME', 'bienesraices'),
        username: env('DATABASE_USERNAME', 'erick@erick-server2'),
        password: env('DATABASE_PASSWORD', 'Pxndx311089'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});
