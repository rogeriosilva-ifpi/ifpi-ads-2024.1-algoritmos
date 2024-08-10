import { getNumber, print } from "./funcoes.js"

function main(){

    let pessoas = 1
    let limite = 4
    while(pessoas <= limite){
        let idade1 = pedirIdade('IDADE: ')
        let idade2 = pedirIdade('IDADE: ')
        let idade3 = pedirIdade('IDADE: ')
        let idade4 = pedirIdade('IDADE: ')

        if(idade1 && idade2 && idade3 && idade4 >= 18 && idade1 && idade2 && idade3 && idade4 <= 100){
            pessoas = 4
        }else if(idade1 && idade2 && idade3 && idade4 >= 18 && idade1 && idade2 && idade3 && idade4 === 0){
            print('FIM DA RESERVA')
            break;
        }
        
        if(pessoas === 4){
            print('NOVO QUARTO CRIADO')
            continue;
        }


    }
}

main()

function pedirIdade(numero){
    const idade = getNumber(numero)
    if((idade < 18 || idade > 100 ) && idade !== 0){
        print('Idade nao permitida')
        return pedirIdade()
    }

    return idade
}