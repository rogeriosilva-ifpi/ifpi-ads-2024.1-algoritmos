import { get_number, maior_numero, menor_numero, media, print } from "/Users/paulo/Meus Documentos/../OneDrive/Documentos/api_sc- REC/utils.js";
import { question } from "readline-sync";
function main(){
   // entrada
    const nome = question('Informe seu nome: ')
    const ano_nascimento = get_number('Informe ano de nascimento: ')
    


    // processamento
    const idade = calcular_idade(ano_nascimento)
    const divisores = verificar_divisor(idade)
    
    // saida
    print(`
        =================================
        Ola ${nome}
        Sua idade: ${idade}
        Divisores da sua idade: 
        ${divisores}
        
        
        
        
        ==================================`
    )

}
main()

// funçoes

function calcular_idade(ano_nascimento){
    return 2024 - ano_nascimento
}

function verificar_divisor(numero){
    let possivel_divisor = numero
    let quociente = 0
    let resto = 0 
    let lista_divisores = 'Divisores: '
        //estrutura de repetição
        
        while(possivel_divisor > 0 ){
            quociente = Math.floor(numero / possivel_divisor) 
            resto = numero - quociente * possivel_divisor
            
            //estrutura condicinal 
            
            if(resto === 0){
                lista_divisores += ` ${possivel_divisor} |`
            }
        possivel_divisor--
        }
    
    return lista_divisores
}
