import { GetNumber, GetNumberAbove, GetNumberBetween, GetNumberInteger, GetNumberIntegerBetween, input,print } from "./utils.js"

function ConversorPesoCalorias(Peso, Sexo){//função que converte o peso(kg) em calorias

    if(Sexo === 1){//se for uma mulher
        return Peso * 9000
    }
    //caso seja um homem
    return Peso * 9400
}


function ComputarCaloriaTransport(Tempo,Sexo){//função que calcula quantas calorias a pessoa vai perder em 1 dia no transport
    let UnidadeMinutosGastos = Tempo / 6
    if(Sexo === 0){//caso seja homem
        UnidadeMinutosGastos = Tempo / 5
    }
    //caso seja mulher
    return 100 * UnidadeMinutosGastos

}


function ComputarCaloriaEscada(Tempo,Sexo){//função que calcula quantas calorias a pessoa vai perder em 1 dia na escada
    let UnidadeMinutosGastos = Tempo / 8
    if(Sexo === 0){//caso seja homem
        UnidadeMinutosGastos = Tempo / 7
    }
    //caso seja mulher
    return 100 * UnidadeMinutosGastos

}


function main(){

    //entrada de dados
    const PesoAtual = GetNumberAbove('Informe seu peso atual[Kg]: ',0)
    print('Masculino : [0] | Feminino : [1]')
    //transformando o sexo em numero para ficar mais facil de verificar
    const Sexo = GetNumberBetween('Informe seu sexo: ',0,1)
    const PerderPeso = GetNumberAbove('Informe quantos quilos[Kg] você quer perder: ',0)
    const DiasAtividadeFisica = GetNumberIntegerBetween('Informe quantos dias na semana você fará atividade física: ', 1,7)
    const TempoTreinoDia = GetNumberAbove('Informe quanto tempo você irá treinar no dia[Mins]: ',0)
    const PorcentagemTempoTransport = GetNumberIntegerBetween('Qual a proporção de tempo alocada para o Transport[%]: ',0,100)

    //processamento dos dados
    const PorcentagemTempoEscada = 100 -  PorcentagemTempoTransport
    const TempoMinutosTransport = TempoTreinoDia * (PorcentagemTempoTransport / 100)//total de minutos gastos no transport por dia
    const TempoMinutosEscada = TempoTreinoDia * (PorcentagemTempoEscada / 100) //total de minutos gasto na escada por dia
    const GastoCaloricoNecessario = ConversorPesoCalorias(PerderPeso,Sexo)
    //gasto calorico em um dia e em uma semana
    const GastoCaloricoTrasport = ComputarCaloriaTransport(TempoMinutosTransport,Sexo)
    const GastoCaloricoEscada = ComputarCaloriaEscada(TempoMinutosEscada,Sexo)
    const GastoCaloricoSemanal = (GastoCaloricoEscada + GastoCaloricoTrasport) * DiasAtividadeFisica 
    //para calcular em quantas semanas ele vai perder esse peso
    let SomaGastoCalorico = 0
    let ContadorSemanas = 0

    while(GastoCaloricoNecessario > SomaGastoCalorico){
        ContadorSemanas++
        SomaGastoCalorico += GastoCaloricoSemanal
    }

    //exibição dos dados
    const Tabela = `
    VOCÊ ALCANÇARÁ SEU OBJETIVO EM                : [${ContadorSemanas} SEMANA(S)]
    QUANTOS MINUTOS DE ESCADA VOCÊ DEVE FAZER     : [${TempoMinutosEscada} MINUTOS](DIÁRIOS)
    QUANTOS MINUTOS DE TRANSPORT VOCÊ DEVE FAZER  : [${TempoMinutosTransport} MINUTOS](DIÁRIOS)`

    print(Tabela)
     
}


main()