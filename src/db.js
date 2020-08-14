const database = require('sqlite-async')       //Comandos para importar e abrir o database (banco de dados)

function execute (db) {
    //Criando as tabelas do banco de dados
    //primary key = cada dado tem um identificador que NÃO PODE SE REPETIR, autoincrement = irá atribuir ids aos dados de forma inteligente
    //o último tipo de dado inserido nunca leva vírgula
    //Não esquecer dos ; no fim dos parenteses para criar as tabelas
    return db.exec(`
        CREATE TABLE IF NOT EXISTS proffys (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT,
                avatar TEXT,
                whatsapp TEXT,
                bio TEXT
        );
        
        CREATE TABLE IF NOT EXISTS classes (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
                subject INTEGER,
                cost TEXT,
                proffy_id INTEGER               
        );

        CREATE TABLE IF NOT EXISTS class_schedule (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
                class_id INTEGER,
                weekday INTEGER,
                time_from INTEGER,
                time_to INTEGER
        );
    `)  

}

module.exports = database.open(__dirname + '/database.sqlite').then(execute)  //então execute o db [para não haver porblema de execução posteriormente]
//Na linha 8 apesar do return estar antes do executar, primeiro a function chamará o banco de dados, depois irá executá-lo para só então retornar 