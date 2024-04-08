import { question } from "readline-sync";

function main(){
    
    let MaiorNota=-Infinity
    let MenorNota=Infinity
    let provas=0
    let total_notas=0
    let notas_homens=0
    let notas_mulheres=0
    let qtd_provasH=0
    let qtd_provasM=0
    let sexo
    let nota
    
while (true){
    sexo=question('Sexo: ')
    if (sexo!=='m'&&sexo!=='f'){
        break
    }
    nota=Number(question('Nota: '))
    if (sexo=='m'){
        notas_homens+=nota
        qtd_provasH++
    }
    if(sexo=='f'){
        notas_mulheres+=nota
        qtd_provasM++
    }
    provas++
    total_notas+=nota
    
    if (MaiorNota<nota){
        MaiorNota=nota
    }
    if (MenorNota>nota){
        MenorNota=nota
    }
}



const performaceH=notas_homens/qtd_provasH
const performaceM=notas_mulheres/qtd_provasM
const notaMedia=total_notas/provas

console.log(`Maior nota da turma: ${MaiorNota}`)
console.log(`Menor nota da turma: ${MenorNota}`)
console.log(`Media Geral da turma: ${notaMedia}`)
console.log(`Performace das notas dos homens: ${performaceH}`)
console.log(`Performace das notas das mulheres: ${performaceM}`)

if (notaMedia>=0&&notaMedia<=2){
    console.log('Desempenho da turma : Péssimo')
}else if (notaMedia<=4){
    console.log('Desempenho da turma : Ruim')
}else if(notaMedia<=7){
    console.log('Desempenho da turma : Regular')
}else if(notaMedia<=8){
    console.log('Desempenho da turma : Bom')
}else if(notaMedia<=9 || notaMedia>9){
    console.log('Desempenho da turma : Excelente')
}
}

main()