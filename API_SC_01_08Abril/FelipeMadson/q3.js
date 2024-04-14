import { question, questionInt } from 'readline-sync';

// Sem funcoes..
// Vetores.

let notasMulheres = [];
let notasHomens = [];
let totalMulheres = 0;
let totalHomens = 0;
let maiorNota = 0;
let menorNota = 10;

let sexo = question("Insira o sexo do aluno (M/F): ").toUpperCase();

while (sexo === "M" || sexo === "F") {
    let nota = questionInt("Insira a nota do aluno (entre 1 e 10): ");

    if (nota > maiorNota) {
        maiorNota = nota;
    }

    if (nota < menorNota) {
        menorNota = nota;
    }

    if (sexo === "M") {
        notasHomens.push(nota);
        totalHomens++;
    } else {
        notasMulheres.push(nota);
        totalMulheres++;
    }

    sexo = question("Insira o sexo do próximo aluno (M/F) ou qualquer outra tecla para encerrar: ").toUpperCase();
}

function classificarDesempenho(nota) {
    if (nota >= 0 && nota <= 2) {
        return "Péssimo";
    } else if (nota > 2 && nota <= 4) {
        return "Ruim";
    } else if (nota > 4 && nota <= 7) {
        return "Regular";
    } else if (nota > 7 && nota <= 8) {
        return "Bom";
    } else {
        return "Excelente";
    }
}

let desempenhoTurma = classificarDesempenho(menorNota);

console.log("\nResumo da Avaliação:");
console.log(`- Total de Alunos Homens: ${totalHomens}`);
console.log(`- Total de Alunas Mulheres: ${totalMulheres}`);
console.log(`- Maior Nota Geral: ${maiorNota}`);
console.log(`- Menor Nota Geral: ${menorNota}`);
console.log(`- Desempenho da Turma: ${desempenhoTurma}`);

let desempenhoHomens = classificarDesempenho(Math.min(...notasHomens));
let desempenhoMulheres = classificarDesempenho(Math.min(...notasMulheres));

console.log(`- Desempenho dos Homens: ${desempenhoHomens}`);
console.log(`- Desempenho das Mulheres: ${desempenhoMulheres}`);
