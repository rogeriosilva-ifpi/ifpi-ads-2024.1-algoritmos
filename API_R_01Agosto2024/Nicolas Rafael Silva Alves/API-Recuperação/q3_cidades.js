import { ask, getNumberPositive, getNumberPositiveZero } from "./Funções/io.js"; // Importação das funções de IO

function main() {
    console.clear();

    //Apresentação
    let message = '\n[-----------Renda Per Capita-----------]\nDigite 0 renda para finalizar a entrada!\n'
    console.log(message);

    //Entrada
    let numCidades = getNumberPositive("Quantas cidades serão informadas: ");

    //Processamento
    let totalCidades = numCidades
    let rendaAtual = 1
    let maiorRenda = 0;
    let menorRenda = 0;
    let somaRenda = 0;
    let index = 1

    while (totalCidades > 0 && rendaAtual != 0){

        rendaAtual = getNumberPositiveZero(`Digite a renda da cidade ${index}: `);
        index++

        if (totalCidades == numCidades){
            menorRenda = rendaAtual
        }

        totalCidades -= 1
        
        somaRenda += rendaAtual;

        if (rendaAtual > maiorRenda){
            maiorRenda = rendaAtual;
        }
        else if (rendaAtual < menorRenda){
            menorRenda = rendaAtual;
        }
    }

    let rendaMedia = somaRenda/numCidades;

    //Saída
    console.clear();

    message = (`
    ============================================
     • Renda Média: R$ ${rendaMedia.toFixed(2)} 
     • Menor Renda: R$ ${menorRenda.toFixed(2)}
     • Maior Renda: R$ ${maiorRenda.toFixed(2)} 
    ============================================\n`);
    
    console.log(message);
    
    // Mensagem para limpar console apos finalizar programa
    if (! ask("Finalizar Programa?(Press Enter)"));
        console.clear();
}

main();