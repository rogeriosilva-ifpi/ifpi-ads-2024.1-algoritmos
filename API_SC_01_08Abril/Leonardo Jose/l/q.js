import {question} from "readline-sync"
function main(){
    const peso_atual = question("Informe o seu peso atual : ")
    const homem_mulher = question("Informe se é homem ou mulher : ")
    const quilos_perder = question("Quantos quilos quer perder : ")
    const dias = question("Quantos dias na semana ira fazer atividade fisica : ")
    const tempo_por_dia = question("Quanto tempo por dia ira treinar (horas): ")
    const tabela = calculo_tabela(peso_atual , homem_mulher , quilos_perder , dias , tempo_por_dia)
    console.log(tabela)
}
function calculo_tabela(peso_atual , homem_mulher , quilos_perder , dias , tempo_por_dia){
    
}
main()