const { question } = require("readline-sync");
// FLAG = SEXO != M OU F
function main(){
    let Nota = 0;
    let NotaAnterior = 0;
    let TotalNotas = 0;
    let QuantidadeAluno = 0;
    let MediaGeral = 0;
    let SexoMasculino = 0;
    let SexoFemenino = 0;
    let NotaMasculina = 0;
    let NotaFemenina = 0;
    let Sexo = "M";
    let EscalaMasculina = 0;
    let EscalaFemenina = 0;
    let MaiorAnterior = 0;
    let MenorAnterior = 10;

    while(Sexo == "M" || Sexo == "F"){
        Sexo = sexo().toUpperCase();
        Nota = NotaAluno();
        if(Sexo == "M"){
            SexoMasculino+=1;
            QuantidadeAluno++;
            NotaMasculina+=Nota;
        
        }else if(Sexo == "F"){
            SexoFemenino+=1;
            QuantidadeAluno++;
            NotaFemenina+=Nota;
        }else{
            break
        }
        if(MaiorAnterior > Nota){
            MaiorAnterior;
        }else{
            MaiorAnterior = Nota;
        }
        if(MenorAnterior < Nota){
            MenorAnterior;
        }else{
            MenorAnterior = Nota;
        }
        TotalNotas+=Nota;

    }
    MediaGeral = Media(TotalNotas,QuantidadeAluno);
    EscalaMasculina = EscalaPercentual(SexoMasculino,QuantidadeAluno);
    EscalaFemenina = EscalaPercentual(SexoFemenino,QuantidadeAluno);
    let SituacaoMasculina = Situacao(NotaMasculina,SexoMasculino);
    let SituacaoFemenina = Situacao(NotaFemenina,SexoFemenino);
    MensagemFinal(QuantidadeAluno,MaiorAnterior,MenorAnterior,MediaGeral,SexoMasculino,EscalaMasculina,SituacaoMasculina,SexoFemenino,EscalaFemenina,SituacaoFemenina)
}
function NotaAluno(){
    return Number(question("NOTA DO ALUNO: "));
}
function sexo(){
    return question("SEXO DO ALUNO (M) MASCULINO OU F (FEMENINO) ");
}
function EscalaPercentual(Sexo,QuantidadeAluno){
    return ((Sexo / QuantidadeAluno).toFixed(2))* 100;
}
function Media(TotalNotas,QuantidadeAluno){
    return (TotalNotas / QuantidadeAluno);
}
function Situacao(Nota,Sexo){
    Resultado = (Nota / Sexo);
    if(Resultado <=2){
        return "PESSIMO";
    }else if(Resultado <= 4){
        return "RUIM";
    }else if(Resultado <= 7){
        return "Regular"
    }else if(Resultado <=8){
        return "BOM";
    }
    return "EXCELENTE";
}
function MensagemFinal(QuantidadeAluno,MaiorNota,MenorNota,MediaGeral,SexoMaculino,EscalaMasculina,SituacaoMasculina,SexoFemenino,EscalaFemenina,SituacaoFemenina){
    console.log(`
        ---------------------- RESULTADO -------------------------
        |---> TOTAL DE ALUNOS: ${QuantidadeAluno}
        |---> MAIOR NOTA: ${MaiorNota}
        |---> MENOR NOTA: ${MenorNota}
        |---> MEDIA DA TURMA: ${MediaGeral}
        |---> QUANTIDADE DE HOMENS: ${SexoMaculino}
        |---> PERCENTUAL DOS HOMENS: ${EscalaMasculina}
        |---> SITUAÇÃO DOS HOMENS: ${SituacaoMasculina} %
        |---> QUANTIDADE DE MULHERES: ${SexoFemenino}
        |---> PERCENTUAL DAS MULHERES: ${EscalaFemenina} %
        |---> SITUAÇÃO DAS MULHERES: ${SituacaoFemenina}
        --------------------------------------------------------------

    
    `)
}

main()