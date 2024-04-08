import { get_number, get_string, print } from "./utils/io_utils.js"

function mian(){
    let senha
    let satisfacao = "n"

    while(satisfacao == "n"){
        print("\n\n--- GERADOR DE SENHAS ---")
        let qtd_digitos_senha = get_number("Quantos dígitos? ")
        senha = gerador_de_senha(qtd_digitos_senha)
        print(`Senha gerada: ${senha}`)
        satisfacao = get_string("Está satisfeito com  senha atual (s/n) ? ")
    }

    print("\n----------------------------")
    print(`Sua senha: ${senha}\n\n`)

}

function gerador_de_senha(n){
    let senha = " "
    let dig_atual;
    let dig_anterior = 0
    let dig_sucessor = 0
    let cont = 1

    while(cont <= n){
        dig_atual = Math.floor(Math.random()*10)
        
        if(dig_atual-1 != dig_anterior && dig_atual+1 != dig_sucessor){
            dig_anterior = dig_atual
            dig_sucessor = dig_atual + 1
            let digito = String(dig_atual)
            senha = senha + digito
            cont++
        }
    }
    return senha
}

mian()