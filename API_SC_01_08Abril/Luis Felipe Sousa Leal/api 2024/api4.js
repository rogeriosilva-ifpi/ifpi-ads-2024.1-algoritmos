import { question } from "readline-sync"
function main(){
    const origem=question('Origem: ')
    const destino=question('Destino: ')
    const valorSite=Number(question('Valor da passagem no site: '))
    const valorEmMilhas=Number(question('Valor da passagem em milhas: '))
    const valor_reais_milhas=valorEmMilhas*70/1000
    const valor_reais_milhas_baratas=valorEmMilhas*14.5/1000
    const porcent_baratas=valor_reais_milhas_baratas*100/valorSite
    const porcent_padrao=valor_reais_milhas*100/valorSite

    console.log(`Valor da passagem em milhas padrão: ${valor_reais_milhas} R$ oque corresponde a ${porcent_padrao.toFixed(1)} % do valor do site`)
    console.log(`Valor da passagem em milhas baratas: ${valor_reais_milhas_baratas} R$ oque corresponde a ${porcent_baratas.toFixed(1)} % do valor no site`)

    if (valorSite<valor_reais_milhas && valorSite<valor_reais_milhas_baratas){
        console.log('A melhor forma de comprar a passagem é comprando pelo site')
    }else if(valor_reais_milhas<valorSite&&valor_reais_milhas<valor_reais_milhas_baratas){
        console.log('A melhor forma de comprar a passagem é usando milhas do programa Smiles')
    }else if(valor_reais_milhas_baratas<valorSite&&valor_reais_milhas_baratas<valor_reais_milhas){
        console.log('A melhor forma de comprar a passagem é acumulando milhas pelo cartão de crédito e compras bonificadas')
    }
}
main()