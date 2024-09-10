import { question } from 'readline-sync'

function main(){
    let qtdDeHospedes = 1
    let qtdQuartos1 = 0
    let qtdQuartos2 = 0
    let qtdQuartos3 = 0
    let qtdQuartos4 = 0

    let idade = Number(question('Idade : '))

    if (idade < 18 || idade > 100){
        console.log('Apenas maiores de 18 e menores que 100')
        return
    }

    while (true){
        idade = Number(question('Idade : '))

        if (idade === 0){
            console.log('Quarto finalizado')

            if (qtdDeHospedes === 1){
                qtdQuartos1 ++
            }
            else if (qtdDeHospedes === 2){
                qtdQuartos2 ++
            }
            else if (qtdDeHospedes === 3){
                qtdQuartos3 ++
            }
            break
        }
        else if (idade < 18 || idade > 100){
            console.log('Apenas maiores de 18 e menores que 100')
            break
        }

        qtdDeHospedes ++

        if (qtdDeHospedes === 4){
            console.log('Quarto finalizado')
            qtdQuartos4 ++
            qtdDeHospedes = 0
        }
    }

    const diasDeReserva = Number(question('Quantidade de dias da reserva : '))

    const detalhamentoQuartos = `
    Quarto Single : ${qtdQuartos1}
    Quarto Duplo  : ${qtdQuartos2}
    Quarto Triplo : ${qtdQuartos3}
    Quarto Master : ${qtdQuartos4}
    `

    console.log(detalhamentoQuartos)

}

main()