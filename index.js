const db = require("./db");

(async () => {
    const db = require("./db");
    console.log('Começou!');

    console.log('INSERT INTO clientes');
    const result = await db.InsertCustomers({ nome: "Vader", idade: 18, uf: "AC" });
    console.log(result);

    console.log('SELECT * FROM clientes');
    const clientes = await db.selectCustomers();
    console.log(clientes);

    console.log('UPDATE clientes');
    const result2 = await db.updateCustomers(2, { nome: "Maul", idade: 20, uf: "SP" });
    console.log(result2);

    console.log('DELETE FROM clientes');
    const result3 = await db.deleteCustomers(3);
    console.log(result3);
})();

