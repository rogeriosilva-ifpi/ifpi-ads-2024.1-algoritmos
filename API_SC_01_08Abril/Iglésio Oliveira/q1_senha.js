// COMENTARIOS: Tá gerando senhas menores que o solictado
// Validacao do Digito tá precária, deveria ser em while até ser valido
import { question } from "readline-sync"

function gerar_digito(){
    return Math.round(Math.random()*10)
}

function gerador_senhas(qtd_digitos){
    let contador_digitos = qtd_digitos
    let senha = ""
    let verificação_segurança

    while (contador_digitos > 0){
        let novo_digito = gerar_digito() // Ele vai sortear um número de 0 a 9 a cada chamada
        if(contador_digitos === qtd_digitos){
            senha += novo_digito+""
        }else if(contador_digitos < qtd_digitos){
            if(novo_digito === verificação_segurança){
                novo_digito = gerar_digito()
            }else if(novo_digito === (verificação_segurança+1)){
                novo_digito = gerar_digito()
            }else if(novo_digito === (verificação_segurança-1)){
                novo_digito = gerar_digito()
            }else{
                senha += novo_digito+""
            }
        }
        verificação_segurança = novo_digito
        contador_digitos -= 1
    }
    return senha
}

function get_number(mensagem){
    return Number(question(mensagem))
}

function show_in_console(mensagem){
    console.log(mensagem)
}

function main(){
    const qtd_digitos = get_number('Olá usuário, insira a quantidade de dígitos da senha que será gerada:')
    let nova_confirmação = "n"
    let nova_senha = gerador_senhas(qtd_digitos)
    while(nova_confirmação !== "s"){
        show_in_console(`Sua nova senha: ${nova_senha} `)

        nova_confirmação = question("Você está satisfeito com essa senha?(s/n): ")
        if((nova_confirmação) === "n"){
            nova_senha = gerador_senhas(qtd_digitos)
        }
    }
}
main()