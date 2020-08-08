//Procurar o botão novo horário
document.querySelector("#add-time")
.addEventListener("click", cloneField) //quando clicar no botão [aqui a ação ainda não existe]

function cloneField() { //Executar uma ação [aqui criamos a ação]
    
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true) //Duplicar os campos [Qual campo?]
    //true é um dado do tipo boolean 

    const fields = newFieldContainer.querySelectorAll('input') //pegar os campos [Que campos?] 
    //No caso, todos os inputs dentro da class ".schedule-item" que é a variáve fields aqui no JS

    fields.forEach(function(field) {            //para cada field encontrado, adicionar a função de "limpar"
        field.value = ""  //aqui foi atribuído um valor "vazio" ao campo para que ele seja clonado limpo
    })

    document.querySelector("#schedule-items").appendChild(newFieldContainer) //Colocar na pagina [Onde?]   
} 

    
    