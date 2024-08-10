// q3_cidades

var input = require("readline-sync");

function main(){

    // entrada
    var quantidade_cidades = input.questionInt("\n> Quantidade de cidades: ")

    // processamento
    var renda_media = 0;
    var menor_renda = 0;
    var maior_renda = 0;
    var somatorio_de_vendas = 0;
    var contador = 1;
    var renda_cidade_atual = 1;

    while (contador <= quantidade_cidades){
        renda_cidade_atual = input.questionFloat(`> renda cidade #${contador} R$: `)

        if (renda_cidade_atual == 0){
            break;
        }

        // para o primeiro loop
        if (contador == 1){
            menor_renda = renda_cidade_atual;
            maior_renda = renda_cidade_atual;
        }
        somatorio_de_vendas += renda_cidade_atual;

        // verificando possivel maior e menor rendoa
        if (renda_cidade_atual >= maior_renda){
            maior_renda = renda_cidade_atual;
        }

        if (renda_cidade_atual <= menor_renda){
            menor_renda = renda_cidade_atual;
        }

        contador++;
    }

    // renda final média
    renda_media = somatorio_de_vendas / quantidade_cidades;

    // saída
    var resultado_final = `
    -------- resultados -------
    > renda média: R$ ${renda_media.toFixed(2)}
    > menor renda: R$ ${menor_renda}
    > maior renda: R$ ${maior_renda}\n`

    console.log(resultado_final)

}

main();