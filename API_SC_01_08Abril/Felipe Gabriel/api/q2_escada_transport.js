import { question } from "readline-sync"

function main() { 
    let sexo = question("Qual o seu sexo?(F/M): ")
    let kgaperder = Number(question("Quantos quilos você quer perder?: "))
    let diasporsemana = Number(question("Quantos dias por semana você irá dedicar?: "))
    let timeperday = Number(question("Quantas horas por dia você irá treinar?: "))
    let proporçaotransport = Number(question("Qual a proporção de tempo alocada para o transport?(%): "))
    let proporçaoescada = 100 - proporçaotransport 


    if (sexo.toLocaleLowerCase() == "m") {
        let caloriaspperder = kgaperder * 7000
        let caloriasperdidadpordia = caloriaspperder / timeperday
        
    } else if (sexo.toLocaleLowerCase() == "m") { 
        let caloriaspperder = kgaperder * 7000
        let caloriasperdidadpordia = caloriaspperder / timeperday
    }
}