import { get_positive_number, show } from "./utils/io_utils.js"

// Digitos repetidos
function main(){
    const digitos_senhas = get_positive_number('Quantidade de dígitos da senha: ')
    let contador = 0
    let senha = ''
    
    let digito_anterior = -2
    let digito_atual = calcular_digito(digito_anterior)

    while (digitos_senhas != contador){
        senha += digito_atual.toString()

        digito_anterior = digito_atual
        digito_atual = calcular_digito()
        contador += 1
    }

    show(`Senha: ${senha}`)

    show(`
1 - Sim
2 - Não`)
    let resposta = get_positive_number('Você está satisfeito com essa senha?: ')

    while (resposta != 1){
        const digitos_senhas = get_positive_number('Quantidade de dígitos da senha: ')
        let contador = 0
        let senha = ''
        
        let digito_anterior = -2
        let digito_atual = calcular_digito(digito_anterior)

        while (digitos_senhas != contador){
            senha += digito_atual.toString()

            digito_anterior = digito_atual
            digito_atual = calcular_digito()
            contador += 1
        }

        show(`Senha: ${senha}`)

        show(`
1 - Sim
2 - Não`)
        resposta = get_positive_number('Você está satisfeito com essa senha?: ')
    }
}

function calcular_digito(anterior){
    let digito = calcular_n_aleatorio(9)

    if (digito != anterior){
        if (digito != anterior-1 && digito != anterior+1){
            return digito
        }
    }else{
        digito = calcular_n_aleatorio(9)

        while (digito == anterior){
            if (digito != anterior-1 && digito != anterior+1){
                return digito
            }

            digito = calcular_n_aleatorio(9)
        }
        
        return digito
    }
}

function calcular_n_aleatorio(max){
    const n = Math.floor(Math.random() * max)
    return n
}

main()