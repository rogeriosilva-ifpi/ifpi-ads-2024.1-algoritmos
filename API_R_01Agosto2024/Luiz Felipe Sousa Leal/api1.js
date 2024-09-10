import { question } from 'readline-sync'

function main(){
    let N = Number(question('N : '))
    const anoAtual = Number(question('Ano Atual : '))

    while (N > 0){
        let nome = question('Nome : ')
        let anoNasc = question('Ano de nascimento: ')

        const idade = anoAtual - anoNasc
        const relatorio = `
        Nome  : ${nome}
        Idade : ${idade}
        `
        console.log(relatorio)

        let divisores = 1

        while (divisores <= idade){
            if (idade % divisores === 0){
                console.log(`${divisores} é um divisor de ${idade}`)
            }
            
            divisores ++
        }
        N --
    }
}

main()