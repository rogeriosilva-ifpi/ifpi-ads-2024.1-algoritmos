import { question } from "readline-sync";

function comparar_milhagens(valor_passagemR$, milhas_padrão, milhas_baratas){
    if(valor_passagemR$ < milhas_padrão && valor_passagemR$ < milhas_baratas){
        return "Passagem em reais"
    }else if(milhas_padrão < valor_passagemR$ && milhas_padrão < milhas_baratas){
        return "Passagem em milhas padrão"
    }else{
        return "Passagem em milhas baratas:"
    }
}

function show_in_console(mensagem){
    console.log(mensagem)
}

function get_number(mensagem){
    return Number(question(mensagem))
}

function main(){
    const origem = question("Insira sua origem de viagem: ")
    const destino = question("Insira seu destino de viagem")
    const valor_passagemR$ = get_number("Insira quanto custa a passagem no site em R$: ")
    const valor_milhas = get_number("Insira o valor da milha da viagem: ")

    const milhas_padrão = (70*valor_milhas)/1000
    const milhas_baratas = (14.50*valor_milhas)/1000

    const porcentagem_milhas_padrão_site = (milhas_padrão*100)/valor_passagemR$ 
    const porcentagem_milhas_barata_site = (milhas_baratas*100)/valor_passagemR$ 

    const melhor_escolha = comparar_milhagens(valor_passagemR$, milhas_padrão, milhas_baratas)

    show_in_console(`
    ===============================================================================
    Olá josé! a viagem ${origem} até ${destino} será de em:
    Valor passagem em reais = ${valor_passagemR$}
    Valor milhas padrão = ${milhas_padrão} ${Math.round(porcentagem_milhas_padrão_site, 2)}% da passagem em reais
    Valor milhas baratas = ${milhas_baratas} ${Math.round(porcentagem_milhas_barata_site), 2}% da passagem em reais
    Melhor opção: ${melhor_escolha}
    ===============================================================================
    `)
}
main()