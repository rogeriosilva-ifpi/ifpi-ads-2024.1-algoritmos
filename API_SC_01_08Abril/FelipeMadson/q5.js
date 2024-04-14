import { question, questionInt } from 'readline-sync';
// Usou itens nao combinados
let listaItens = [];
let total = 0;

function incluirItem() {
    console.log("Incluir Item:");
    let descricao = question("Descrição do Item: ");
    let especificacao = question("Especificação do Item: ");
    let valor = questionInt("Valor do Item: ");
    listaItens.push(`${descricao} (${especificacao}) R$ ${valor.toFixed(2)}`);
    total += valor;
    console.log("Item incluído com sucesso!");
}

function imprimirLista() {
    console.log("\n--- Lista de Compras ---");
    listaItens.forEach((item, index) => {
        console.log(`${index + 1} - ${item}`);
    });
    console.log(`\nValor total: R$ ${total.toFixed(2)}`);
}

function menu() {
    console.log("\n----- PESQUISA DE PREÇOS -----");
    console.log("1 - Incluir Item");
    console.log("2 - Imprimir Lista");
    console.log("3 - Sair");
    let opcao = questionInt("Escolha uma opção: ");

    switch (opcao) {
        case 1:
            incluirItem();
            break;
        case 2:
            imprimirLista();
            break;
        case 3:
            console.log("Saindo...");
            return;
        default:
            console.log("Opção inválida. Por favor, escolha novamente.");
    }

    menu();
}

menu();
