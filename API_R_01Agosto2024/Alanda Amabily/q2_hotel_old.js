import {question} from "readline-sync"

function main(){
    var pessoa = Number(question('idade: '))

    let qtd_pessoas_quarto = 0;


    while(pessoa != 0){
        qtd_pessoas_quarto += 1;  

        pessoa = Number(question('idade: '))
    }



    
}
main()