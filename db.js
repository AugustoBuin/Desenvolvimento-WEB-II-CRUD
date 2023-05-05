var mysql = require('mysql2/promise');

// Conexão com o banco de dados
async function connect() {
    if (global.connection && global.connection.state !== 'disconnected')
        return global.connection;

    const con = await mysql.createConnection({
        host: 'localhost',
        // port: 3306,
        user: 'root',
        password: 'Morgana',
        database: 'facul'
    });

    console.log("Conectado!")
    global.connection = con;
    return global.connection;
};

// SELECT
async function selectEspecifico() {
    const conn = await connect();
    const [rows] = await conn.query(
        'SELECT aluno.nome as nome_aluno, ' +
        'curso.nome as nome_curso, ' +
        'disciplina.nome as nome_disciplina, ' +
        'matricula.id as id_matricula ' +
        'FROM aluno ' +
        'INNER JOIN matricula ON aluno.id = matricula.aluno_id ' +
        'INNER JOIN disciplina ON disciplina.id = matricula.disciplina_id ' +
        'INNER JOIN curso ON curso.id = disciplina.curso_id ' +
        'ORDER BY aluno.nome; '
    );
    return rows;
};


module.exports = { selectEspecifico };