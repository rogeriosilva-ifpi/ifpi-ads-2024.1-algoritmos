const { question } = require("readline-sync");

function main(){
    let PerderPeso = 7000;
    let sexo = Number(question("DIGITE (1) - PARA SEXO MASCULINO; (2) - SEXO FEMENINO"));
    let peso = Peso();
    let DiasSemanas = QuantidadeDias()
    let QuantidadePesoAPerder = QuantidadePerder();
    let Simulador = Simular(peso,QuantidadePesoAPerder,sexo,DiasSemanas,PerderPeso,sexo);
}
function Peso(){
    return Number(question("INFORME SEU PESO: KG"))
}

function QuantidadePerder(){
    return Number(question("QUANTIDADE DE PESO QUE VOCÊ DESEJA PERDER: KG"))
}
function QuantidadeDias(){
    return Number(question("QUANTIDADE DE DIAS QUE VOCÊM TREINA POR SEMANA(1 A 7 DIAS): "))
}
function Simular(peso,QuantidadePerder,Sexo,DiasSemanas,PerderPeso,sexo){
    let Transport = 100 //A CADA 5 MINUTOS HOMEM, A CADA 6 MINUTOS MULHER
    let Escada =  100 // A CADA 7 MINUTOS HOMEM, A CADA 8 MINUTOS MULHER;
    let Minutos = 60;
    let TransportPergunta = Number(question("QUANTOS MINUTOS VOCÊ TREINA O TRANSPORT DE 60 MINUTOS?"))
    Minutos = Minutos - TransportPergunta
    console.log(`PODEMOS CONCLUIR QUE O RESTANTE  ${Minutos} MINUTOS SEJA PRA ESCADA`);
    let EscadaPergunta = Minutos;
    let PesoAPerderEmKcal = (QuantidadePerder * PerderPeso);
    if(TransportPergunta > 0){
        TransportPergunta = TransportPergunta / (sexo === 1 ? 5 : 6)
        console.log(TransportPergunta)
    }if(EscadaPergunta > 0){
        EscadaPergunta = EscadaPergunta / (sexo === 1 ? 7 : 8);
        console.log(EscadaPergunta)
    }
    TransportPergunta = parseInt(TransportPergunta * Transport);
    EscadaPergunta = parseInt(EscadaPergunta * Escada);
    let QuantidadeKcalGasta = (Sexo === 1 ? 2400 : 2000) + TransportPergunta + EscadaPergunta;
    let QuantidadeSemanalGasta = QuantidadeKcalGasta * DiasSemanas;
    let Semanas = PesoAPerderEmKcal / QuantidadeSemanalGasta;

    console.log(`
    >>>>>>>>>>>>>>>>>>>>>>>>RESULTADO FINA<<<<<<<<<<<<<<<<<<<<<<<<<
    | ---> QUANTIDADE DE PESO QUE VOCÊ POSSUI: KG${peso}
    | ---> QUANTIDADE DE PESO QUE VOCÊ QUER PERDER: KG ${QuantidadePerder}
    | ---> QUANTIDADE KCAL GASTA PRA ATINGIR SEU OBJETIVO NO TRANSPORT: KCAL ${TransportPergunta}
    | ---> QUANTIDADE KCAL GASTA PRA ATINGIR SEU OBJETIVO NA ESCADA: KCAL ${EscadaPergunta}
    | ---> QUANTIDADE DE KCAL QUE VOCÊ VAI PERDER NO DIA: KCAL ${QuantidadeKcalGasta}
    | ---> QUANTIDADE DE KCAL GASTA POR SEMANA BASEADA NOS DIAS(${DiasSemanas} DIAS) QUE VOCÊ TREINA: KCAL ${QuantidadeSemanalGasta}
    | ---> QUANTIDADE DE SEMANAS PARA ATINGIR SEU OBJETIVO : ${parseInt(Semanas)}
    
    `)
}main()