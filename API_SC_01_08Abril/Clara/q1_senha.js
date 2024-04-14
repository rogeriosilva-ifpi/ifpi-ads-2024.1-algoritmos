import { question } from 'readline-sync'

function main(){
    const qtd_digitos = Number(question('Por favor, digite a quantidade de digitos desejado: '))
    let gerar_senha = parseInt(Math.random()*10)
    let numero_anterior = 0 
    let digitos = 0
    let senha_atual = ""
    
    while(qtd_digitos >= digitos){
        if(gerar_senha != numero_anterior){
            senha_atual += gerar_senha
            digitos++
        }
    
        if(digitos == qtd_digitos){
            console.log(`Senha Obtida: ${senha_atual}`)
            let senha_satisfeita = question('O usuário esta satisfeito com senha atual?(S/N): ')
            if(senha_satisfeita == 'S'){
              console.log('Encerrando...')
            } else {
            return gerar_senha
            }
        }
        

    }
    console.log('----------- SENHA GERADA ----------')
    console.log(`SENHA: ${senha_atual}`)
}
main()