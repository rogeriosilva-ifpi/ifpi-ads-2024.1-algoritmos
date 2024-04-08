const { question } = require("readline-sync");

function main(){
    let produto = question("QUAL O PRODUTO QUE VOCÊ QUER ADICIONAR A LISTA: ").toUpperCase();
    let UnidadeMedida = 0;
    let ValorUnidade = 0;
    let Ordem = 0;
    let Pesquisa = "";
    let ValorTotal = 0;
    while(produto !== "FIM"){
        Ordem++;
        UnidadeMedida = question("INFORME A UNIDADE DO PRODUTO(KG,L E ETC) EX: 5KG : ")
        ValorUnidade = Number(question('VALOR DA UNIDADE: R$'));
        Pesquisa += `
        -----> ${Ordem} - ${produto} (${UnidadeMedida})   R$ ${ValorUnidade * parseInt(UnidadeMedida)}`
        ValorTotal += ValorUnidade * parseInt(UnidadeMedida);
        produto = question("QUAL O PRODUTO QUE VOCÊ QUER ADICIONAR A LISTA: ").toUpperCase();
    
    }
    console.log(`
        -------------- PESQUISA DE PREÇOS -----------------
         ${Pesquisa}
        ----------------------------------------------------
        VALOR TOTAL:                  R$${ValorTotal}
    `)
    let FormaPagamento = ValorTotal;
    if(FormaPagamento > 30){
        let FormaPagar = Number(question("DIGITE (1) - PARA A VISTA ;(2) - PARA PARCELADO; SUA ESCOLHA: "))
        if(FormaPagar === 1){
            console.log(`VOCÊ ESCOLHEU O PAGAMENTO A VISTA SUA COMPRA DEU: ${FormaPagamento}`)
        }else if(FormaPagar === 2){
            console.log(Parcelamento(ValorTotal));
        }else{
            console.log("DIGITE VALORES VALIDOS")
        }
    }
    
}
function Parcelamento(ValorTotal){
    let Pergunta = 0;
    let Parcelas = 0;
    if(ValorTotal > 30 && ValorTotal <= 100){
        Pergunta = Number(question("EM QUANTAS VEZES VOCÊ DESEJA PARCELAR?(ATÉ 3X)"));
        Parcelas = (ValorTotal / Pergunta)
    }else if(ValorTotal > 100){
        Pergunta = Number(question("EM QUANTAS VEZES VOCÊ DESEJA PARCELAR?(ATÉ 5X)"));
        if(Pergunta === 6){
            Parcelas = (ValorTotal / Pergunta) + ((ValorTotal / Pergunta)* 0.05) 
        }else{
            Parcelas = (ValorTotal / Pergunta);
        }
    }
    return `VOCÊ ESCOLHEU ${Pergunta}X DE R$${Parcelas.toFixed(2)} `;
}
main()