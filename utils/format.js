const subjects = [ 
    "Artes",
    "Biologia",
    "Ciências",
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
]

//Funcionalidades 

function getSubject(subjectNumber) {  //A função pega o número do array 
    const position = +subjectNumber -1  //Altera a posição para conta novamente de 0
    return subjects[position]  //E retorna o nome da matéria no lugar do valor atribuído a ela
}

function convertHoursToMinutes(time) {
    const [hour, minutes] = time.split(":")
        return Number((hour * 60) + minutes)  //Coloca-se a funcionalidade number para garantir que a função retorne no formato numérico
}

module.exports = {
    subjects,
    weekdays,
    getSubject,
    convertHoursToMinutes
}