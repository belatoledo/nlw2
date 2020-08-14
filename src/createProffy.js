module.exports = async function(db, { proffyValue, classValue, classScheduleValues }) {  //aqui está recebendo o banco de dados e os valores que serão usados ao chamá-lo
    //inserir dados na tables de proffys
    //a variável insertedProffy irá receber os valores 
    const insertedProffy = await db.run(`
        INSERT INTO proffys (
            name,
            avatar,
            whatsapp,
            bio
        ) VALUES (
            "${proffyValue.name}",
            "${proffyValue.avatar}",
            "${proffyValue.whatsapp}",
            "${proffyValue.bio}"
        );  
    `)
    
    const proffy_id = insertedProffy.lastID // ↑↑↑ Quando a função db for executada, ela irá entrar na linha 4, aguardar e colocar as coisas no banco de dados
//Depois irá inserir na variável insertProffy os valores do proffy cadastrado e gerar um proffy_id (lastID inserido)


//Inserir dados na tabela classes
    const insertedClasses = await db.run(`
        INSERT INTO classes (
            subject,
            cost,
            proffy_id
        ) VALUES (
            "${classValue.subject}",
            "${classValue.cost}",
            "${proffy_id}"
        );
`)

    const class_id = insertedClasses.lastID // ↑↑↑ Quando a função db for executada, ela irá entrar na linha 22, aguardar e colocar as coisas no banco de dados
    //Depois irá inserir na variável insertProffy os valores da classe cadastrada e gerar um class_id (lastID inserido) que será guardado no array [insertedAllClassScheduleValues] e retornado 

    //Inserir dados na tabela class_schedule. insertedAllClassScheduleValue é uma promessa
    const insertedAllClassScheduleValues = classScheduleValues.map((classScheduleValue) => { //Vai mapear todos os elementos um por um e passar na função o valor e gerar um novo array 
    //Cada vez que a função for rodada ela irá executar um objeto do array com o retorno da function com os db.run
    return db.run(`
        INSERT INTO class_schedule (
            class_id,
            weekday,
            time_from,
            time_to
        ) VALUES (
            "${class_id}",
            "${classScheduleValue.weekday}",
            "${classScheduleValue.time_from}",
            "${classScheduleValue.time_to}"           
        ); 
    `)

})

    //Aqui será executado todos os db.run das class_schedules
    await Promise.all(insertedAllClassScheduleValues)
}