import { get_number, print } from "/Users/paulo/Meus Documentos/../OneDrive/Documentos/Paulo do Carmo S. Filho_api_sc- REC/utils.js";
import { question } from "readline-sync";

function main(){
    // entrada
    const nome = question('Informe seu nome: ')
    const ano_nascimento = get_number('Informe ano de nascimento: ')
    


    // processamento
    const idade = calcular_idade(ano_nascimento)
    const divisores = listar_divisores(idade)
    const maior_primo = verificar_primo(idade)   

    
    // saida
    print(`
    =================================
    Ola ${nome}
    Sua idade: ${idade}
    Divisores da sua idade: 
    ${divisores}
    Maior primo entre os divisores: ${maior_primo}
    ==================================`
    )
    
    let contador = maior_primo
    while(contador > 0){
        print(nome)
        contador--
    }

}
main()




// funçoes

function calcular_idade(ano_nascimento){
    return 2024 - ano_nascimento
}

function listar_divisores(numero){
    let possivel_divisor = numero
    let quociente = 0
    let resto = 0 
    let lista_divisores = 'Divisores: '
        //processmento
        
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

function verificar_primo(numero){
    let possivel_divisor = numero
    let divisor_atual = 1 
    let maior_primo = 0
    let primo 
        //processmento
        
        while(divisor_atual <= numero ){
            if(numero % divisor_atual === 0){
                possivel_divisor = 2
                primo = true

                while (possivel_divisor <= divisor_atual / 2 && primo){
                    if (divisor_atual % possivel_divisor === 0){
                        primo = false
                    }
                    possivel_divisor++
            }
        if (primo && divisor_atual > maior_primo ){
            maior_primo = divisor_atual
        }
            }
        divisor_atual++
        }
        return maior_primo
    }

