import { question } from "readline-sync";

function main(){

    //Dados gerais

    const peso= number("Escreva seu peso atual ")
    const homemdia= 2400
    const mulherdia= 2000

    //Gastos caloricos de acordo com o minuto de atividade realizado

    const transportporminutohomem= 100/5
    const escadaporminutohomem= 100/7
    const transportporminutomulher= 100/6
    const escadaporminutomulher= 100/8

    //Quanto vale 1 kg de gordura em calorias

    const kgcaloria= 7000

    //Tempo que deseja alocar para cada atividade

    const tempotransport= number("Escreva quanto tempo deseja alocar")
    const tempoescada= number("Escreva quanto tempo deseja alocar ")
    
    
    //Calculo sobre tempo e resultado
    const tempodiahomemtransport= (transportporminutohomem/kgcaloria)
    const tempodiamulhertransport= (transportporminutomulher/kgcaloria)
    const tempodiahomemescada= (escadaporminutohomem/kgcaloria)
    const tempodiamulherescada= (escadaporminutomulher/kgcaloria)
    
    // RESULTADO
    console.log (`O tempo equivalente para uma mulher perder 1kg de gordura utilizando transport é de  ${kgcaloria/transportporminutomulher}`)
    console.log (`O tempo equivalente para uma mulher perder 1kg de gordura utilizando escada é de ${kgcaloria/escadaporminutomulher}`)
    console.log (`O tempo equivalente para um homem perder 1kg de gordura utilizando transport é de ${kgcaloria/transportporminutohomem}`)
    console.log(`O tempo equivalente para um homem perder 1kg de gordura utilizando escada é de ${kgcaloria/escadaporminutohomem}`)
} main()
