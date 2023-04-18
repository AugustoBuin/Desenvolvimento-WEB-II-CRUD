var mysql = require('mysql2/promise');

// COnexão com o banco de dados
async function connect() {
    if (global.connection && global.connection.state !== 'disconnected')
        return global.connection;

    const con = await mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: '',
        database: 'crud'
    });

    console.log("Conectado!")
    global.connection = connection;
    return global.connection;
};

// SELECT
async function selectCustomers() {
    const conn = await connect();
    const [rows] = await conn.query('SELECT * FROM clientes');
    return rows;
};

// INSERT
async function InsertCustomers() {
    const conn = await connect();
    const sql = 'INSERT INTO clientes(nome, idade, uf) VALUES (?, ?, ?);';
    const values = [customer.nome, customer.idade, customer.uf];
    return await conn.query(sql, values);
};

// UPDATE
async function UpdateCustomers() {
    const conn = await connect();
    const sql = 'UPDATE clientes SET VALUES nome = ?, idade = ?, uf = ? WHERE id = ?';
    const values = [customer.nome, customer.idade, customer.uf, id];
    return await conn.query(sql, values);
};

// DELETE
async function DeleteCustomers() {
    const conn = await connect();
    const sql = 'DELETE FROM clientes WHERE id = ?';
    const values = [customer.nome, customer.idade, customer.uf, id];
    return await conn.query(sql, values);
};

module.exports = { selectCustomers, InsertCustomers, UpdateCustomers, DeleteCustomers };