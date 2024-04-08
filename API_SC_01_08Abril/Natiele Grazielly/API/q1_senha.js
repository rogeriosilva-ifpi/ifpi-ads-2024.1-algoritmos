import {question} from "readline-sync"

function main(){

console.log(` >>> GERADOR DE SENHAS <<<`)

let pergunta = question(`Deseja gerar uma nova senha(s/n):`)

if(pergunta === `s`){
    let N_digitos = Number(question(`Quantos digitos? --> `))

    while(N_digitos > 0 ){

        

        N_digitos--
    }
    let nova_pergunta = question(`Deseja gerar uma nova senha(s/n):`)

}else{

    console.log(`Encerrando...`)

}

}

main()