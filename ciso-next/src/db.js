const sql = require('mssql');

const config = {
    user: 'your-username',
    password: 'your-password',
    server: 'your-server',
    database: 'your-database',
};

const pool = new sql.ConnectionPool(config);

async function connect() {
    try {
        await pool.connect();
        console.log('Connected to MSSQL');
    } catch (error) {
        console.error('Error connecting to MSSQL', error);
    }
}

module.exports = {
    connect,
    pool,
};