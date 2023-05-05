const db = require("./db");

(async () => {
    const db = require("./db");
    console.log('Começou!');

    console.log('SELECT específico dos alunos');
    const result = await db.selectEspecifico();
    console.log(result);
})();

