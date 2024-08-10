import { question } from "readline-sync";

function main(){

    const nome = obter_texto("Digite seu nome: ")
    const anoNascimento = obter_numero("Digite seu ano de nascimento: ")

    //1. Mostrar idade
    const idade = 2024 - anoNascimento
    mostrar_texto(`A sua idade é: ${idade} anos`)

    //2. Mostrar divisores da idade
    let divisores = verificar_divisores(idade)
    
    

    
    
    
        
        
     



}
main()

function obter_texto(mensagem){
    return question(mensagem)
}

function obter_numero (texto){
    return Number(question(texto))
}
function mostrar_texto(mensagem){
    console.log(mensagem)
}

function verificar_divisores(numero){
    let divisor = numero
   
       while (divisor > 0){
           if(numero % divisor === 0){
               console.log(divisor)
           }

           divisor--
       }
}

function verificar_primos(numero){
    //Verificando pares
    function verificar_divisores_pares(numero){

        //Verificar divisores pares
        let divisivel_2 = 0
        let divisivel_4 = 0
        let divisivel_6 = 0
        let divisivel_8 = 0
        let divisivel_10 = 0
    
        if (numero % 2 == 0) {
            divisivel_2 = 1
            
        }
    
        if (numero % 4 == 0) {
            divisivel_4 = 1
        }
    
        if (numero % 6 == 0) {
            divisivel_6 = 1
        }
    
        if(numero % 8 == 0){
            divisivel_8 = 1
        }
    
        if(numero % 10 == 0){
            divisivel_10 = 1
        }
        const qtd_divisores_pares = divisivel_2 + divisivel_4 + divisivel_6 + divisivel_8 + divisivel_10
    
        
        
    //Verificar divisores impares 
    let divisivel_3 = 0
    let divisivel_5 = 0
    let divisivel_7 = 0
    let divisivel_9 = 0
    let divisivel_11 = 0
    

    if (numero % 3 == 0) {
        divisivel_3 = 1
        
    }

    if (numero % 5 == 0) {
        divisivel_5 = 1
    }

    if (numero % 7 == 0) {
        divisivel_7 = 1
    }

    if(numero % 9 == 0){
        divisivel_9 = 1
    }

    if(numero % 11 == 0){
        divisivel_11 = 1
    }

    const qtd_divisores_impares = divisivel_3 + divisivel_5 + divisivel_7 + divisivel_9 + divisivel_11

    //Somar quantidade de divisores
    const total_divisores = qtd_divisores_impares + qtd_divisores_pares
    mostrar_texto(`Qtd divisores: ${total_divisores}`)

    // Verificar se é primo pela quantidade de divisores
    if (total_divisores === 2){
        return true
    }else{
        return false
    }
    }


}