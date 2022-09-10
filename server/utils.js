export const con = {
    server: 'localhost',
    port: 1433,
    user: 'Ulrich',
    password: 'ducktors',
    database: 'ducktors',
    options: {
      enableArithAbort : true,
      encrypt: false,
      trustServerCertificate: true,
    },
    connectionTimeout : 15000,
    pool: {
      max: 10,
      min: 0,
      idleTimeoutMillis: 30000
    }
}