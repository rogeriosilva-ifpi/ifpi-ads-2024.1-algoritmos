import { question } from "readline-sync"

function main(){

    //Entrada

console.log(`
---------- SIMULATOR ----------
`)
const nome = question('Qual seu nome? ')
console.log(`Olá, ${nome}!`)
const genero = Number(question('Informe seu sexo(1- feminino e 2- masculino): '))
const peso = Number(question('Qual seu peso atual? '))
const peso_perder = Number(question('Quantos KG voce deseja perder? '))
const dias_semana = Number(question('Quantos dias da semana voce pretende treinar? '))
console.log(`-------------------------------`)

    //Processamento 

const sx = gender(genero)
const kg1 = (peso_perder * 1000) / 7000 
const kg2 = (kg1 / dias_semana) 


console.log(`${kg2}`)

}
main ()

function gender(genero){
    if (genero === 1){
        return "feminino"
    } else (genero === 2)
        return "masculino"
}
    //se for feminino 

function treino_fem( sx, peso, peso_perder, dias_semana){


}
   //se for masculino

   function treino_masc( sx, peso, peso_perder, dias_semana){

   }