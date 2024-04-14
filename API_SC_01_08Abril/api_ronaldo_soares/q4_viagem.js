import {question} from 'readline-sync'

function main(){

var nome = question('Digite o seu nome: ')
var origem = question('Digite a origem da viagem: ')
var destino = question('Digite o destino da viagem: ')
var valor_reais = Number(question('Digite o valor em R$ da viagem no site: '))
var quantidade_milhas = Number(question('Digite a quantidade de milhas necessárias para a viagem: '))

const calcular_milhas_padrão = (quantidade_milhas * 70)/1000
const calcular_milhas_acumuladas = (quantidade_milhas * 14.50)/1000

const melhor_opcao = verificar_melhor_opcao(valor_reais, calcular_milhas_acumuladas, calcular_milhas_padrão)

console.log('---------------------------------------------------------------------')
console.log(`Olá ${nome}!`)
console.log(`Caso você compre com milhas padrão, pagará                  :R$ ${calcular_milhas_padrão}`)
console.log(`Caso você compre com milhas acumuladas baratas, pagará      :R$ ${calcular_milhas_acumuladas}`)
console.log(`Caso você compre a viagem em R$, diretamente no site, pagará:R$ ${valor_reais}`)
console.log('---------------------------------------------------------------------')
console.log(`Sendo assim, a melhor forma de compra de passagens, de ${origem} para ${destino} é ${melhor_opcao} `)
console.log('---------------------------------------------------------------------')

}
main()

function verificar_melhor_opcao(valor_reais, calcular_milhas_acumuladas, calcular_milhas_padrão){
    if(valor_reais < calcular_milhas_padrão && valor_reais < calcular_milhas_acumuladas){
        return "Em R$, diretamente no site."
    }else if(calcular_milhas_acumuladas < valor_reais && calcular_milhas_acumuladas < calcular_milhas_padrão){
        return "com milhas acumuladas."
    }else if(calcular_milhas_padrão < valor_reais && calcular_milhas_padrão < calcular_milhas_acumuladas){
        return "com milhas padrão."
    }
}
