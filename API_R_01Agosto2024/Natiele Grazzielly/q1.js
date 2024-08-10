import { question } from "readline-sync"
import { getNumber, print } from "./funcoes.js"

function main(){

    const nome = question('NOME: ')
    const ano = getNumber(`ANO DE NASCIMENTO: `)

    let idade = 2024 - ano  

    //calcular divisores
    let divisores = ''
    let somatorioDivisores = 0
    let qtsDivisores = 0
    let maiorDivisor = idade
    let menorDivisor = 0

    for(let i = 1; i <= idade;i++){
        if(idade % i == 0){
            divisores += " " + i
            somatorioDivisores += i
            qtsDivisores++

        }

        if( qtsDivisores === 2){ // É PRIMO QUANDO SO TEM DOIS(2) DIVISORES, 1 E ELE MESMO , E O MAIOR DIVISOR SEMPRE VAI SER ELE MESMO....
            //SE HOUVER O MAIOR DIVISOR,MOSTRAR N VEZES
            let contador = 1
            while(contador <= idade){
                print(nome)
                contador++
            }
        }else if(qtsDivisores > 2){
            let V_mediaDivisores = somatorioDivisores / qtsDivisores
            print(`NAO HA NUMEROS PRIMOS ENTRE OS DIVISORES DA SUA IDADE,DEVIDO A ISSO VOU MOSTRAR SEU NOME ${V_mediaDivisores} vezes`)
            print(`SOMATORIO DIVISORES: ${somatorioDivisores} --- QTD DIVISORES: ${qtsDivisores}`)
            let contadorDeV = 1
            while(contadorDeV <= V_mediaDivisores){

                print(nome)
                contadorDeV++
            }

        }


    }

    const resultado = 
(`DIVISORES:${divisores}`)

    print(resultado)

}

main()