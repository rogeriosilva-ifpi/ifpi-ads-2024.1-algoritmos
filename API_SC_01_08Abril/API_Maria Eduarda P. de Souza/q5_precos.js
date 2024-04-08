import { question } from "readline-sync"

function main(){

    //Entrada 

console.log(`
---------- PESQUISA DE PREÇOS ----------

`)
const produto = question("Nome do produto: ")
const especificação = question("especificações do produto(KG/L, etc): ")
const preço = question("Valor do produto: ")
console.log(`----------------------------------------`)
const mais_produtos = Number(question("Deseja adicionar mais algum produto?(1-sim, 2-não) "))

    //Processamento
const produtosss = (produto, especificação, preço)
const produtoss = add_mais_produtos(mais_produtos, produto,especificação, preço)

    //Saída 
    
console.log(`
${produto} ${especificação} ---------- ${preço}
`)



}
main()

function add_mais_produtos(mais_produtos, produto,especificação, preço){
    if (mais_produtos === 1){
        return produtosss 
    } else (mais_produtos === 2)
        return " "

}