import {question} from "readline-sync"
function main(){
 const origem = question("Informe o local de origem : ")
 const destino = question("Informe o local de destino : ")
 const valor_Rs = question("Informe o valor em reais(R$) no site : ")
 const valor_milhas = question(("Informe o valor em milhas no site : "))
 const calculo_tabela = calculo(valor_Rs , valor_milhas)
 console.log(milhas_padrao)
}
function calculo(valor_Rs , valor_milhas){
    let milhas_padrao = 70
    let milhas_baratas = 14.50
    const valor_milhas_padrao = (milhas_padrao * valor_milhas)  / 1000
    const diferença = Math.floor((valor_milhas_padrao/ valor_Rs)* 100)
    const valor_milhas_baratas = (milhas_baratas * valor_milhas) / 1000
    const diferença_barata = Math.floor((valor_milhas_baratas/ valor_Rs)* 100)
    
    
    console.log(
`   valor em reais(R$) ; ${valor_Rs} R$
    valor em milhas padrao : ${valor_milhas_padrao} R$
    valor em milhas baratas : ${valor_milhas_baratas} R$
    relação entre valor em milhas padrao e valor em reais ; ${diferença}%
    relação entre valor em milhas baratas e valor em reais ; ${diferença_barata}%
    `) 
    if(valor_milhas_padrao < valor_milhas_baratas && valor_milhas_padrao < valor_Rs){
        console.log("A melhor opção de compra é milhas_padrao")
    }else if(valor_milhas_baratas < valor_milhas_padrao && valor_milhas_baratas < valor_Rs){
        console.log("A melhor opção de compra é milhas_baratas")
    }else{
        console.log("A melhor opção de compra é em reais")
    }
    
}
//programa smile 70 = 1000
//cartao = 14.50 = 1000
//dinheiro = 431
main()
