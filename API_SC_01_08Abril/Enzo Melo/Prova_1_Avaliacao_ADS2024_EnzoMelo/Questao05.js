import { question } from 'readline-sync';

console.log("***** BEM-VINDO AO ENZOAPP *****")
//Tentativa de resolução sem menu.

function main(){
    const imprimir_ou_incluir: Number(question("Digite um número diferente de 1 se quer incluir itens,o contrário encerra o programa: "))
    let valor_total
    if(imprimir_ou_incluir === 1){
      const item = question("Nome do item: ")
      const especificacao = Number(question("Especifique o peso: "))
      const valor = Number(question("Especifique o valor: "))
      valor_total += valor

        if(valor_total <= 30){
            console.log("Não é possível parcelar o valor total de forma juros simples.")
        }
        else if(valor_total > 30 && valor_total <= 100){
            console.log("É possível parcelar o valor total em até 3X nos juros simples.")
        }
        else{
            console.log("É possível parcelar o valor total em até 5X nos juros simples.")
        }


     return imprimir_ou_incluir
    }
    
    if(imprimir_ou_incluir >= 1){
      const valor2 = Number(question("Especifique o valor de algum item comprado,coloque zero caso não tenham comprado nenhum: "))
      valor_total += valor2
      
      return console.log(`Você escolheu imprimir a lista,veja ela logo abaixo.
      ----PESQUISA DE PREÇOS----
      ${item} 
      ${especificacao} 
      R$ ${valor.toFixed(2)}
      ----------------------
      R$ ${valor_total}`)
    }
    else{
     return imprimir_ou_incluir
}
}
main()
       
   



