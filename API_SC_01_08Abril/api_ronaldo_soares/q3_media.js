import {question} from 'readline-sync'

function main(){

let alunos = Number(question('Digite quantos alunos voce quer computar as notas: '))
let contador = 1
contador++
const receber_notas = verificar_quantidade_alunos(alunos)
}

function verificar_quantidade_alunos(alunos){
 while(contador < alunos){
    let nome = question('Digite o nome do aluno: ')
    let nota = Number(question('Digite a nota do aluno: '))
 }
 
 
}
main()