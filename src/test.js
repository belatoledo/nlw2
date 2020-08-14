const Database = require('./db.js')
const createProffy = require('./createProffy')

Database.then (async(db) => {
    //Inserir dados
    proffyValue = {
        name: "Bela Toledo", 
        avatar:"https://avatars2.githubusercontent.com/u/61567726?s=460&u=b7b9d50454f77746648dd12fdeb805fbf29d86cc&v=4", 
        whatsapp: "31911223344", 
        bio:"Eu não sei desenhar, mas consigo usar lápis de cor igual uma criança de 6 anos. Tenho muito giz de cera e todas as cores de tinta guache em casa. Eu ensino a galera a pintar coisas abstratas porque é só jogar a tinta e misturo todas as técnicas sem saber nenhuma para conseguir resultados incríveis."
    }

    classValue = { //não podemos colocar apenas class aqui, pois é uma palavra reservada do JS
        subject: 1, 
        cost:"250"
        //o proffy_id irá vir pelo banco de dados   
    }

    classScheduleValues = [ //Aqui serão alocados vários dados, por isso são inseridos em ARRAY 
                          //lembrar que aqui é um arquivo JSON. Aplicar as regras de escrita do JS
                          //class_id virá pelo banco de dados após a inserção das aulas
        {  
            weekday: 1,
            time_from: 720, 
            time_to: 1220
        },
        {  
            weekday: 0,
            time_from: 520, 
            time_to: 1220
        }
    ]

    //return await createProffy(db,{ proffyValue, classValue, classScheduleValues })

    //Consultar dados inseridos

    //Consultar TODOS os proffys
    const selectedProffys = await db.all("SELECT * FROM proffys")
        console.log (selectedProffys)

    //Consultar as classes de determinado proffy e trazer junto os dados do professor (unindo as tabelas)
    const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)  
        WHERE classes.proffy_id = 1;
    `)
        //console.log(selectClassesAndProffys)
    
    //Proffy trabalha de 8 as 18, então o horário deve ser time_from menor que o horário solicitado pelo aluno
    //e o time_to deve ser maior que o horário solicitado pelo aluno

    const selectedClassesSchedules = await db.all
    (`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "0"
        AND class_schedule <= "1300"
        AND class_schedule.time_to > "1300"
    `)
        //console.log(selectedClassesSchedules)
})  