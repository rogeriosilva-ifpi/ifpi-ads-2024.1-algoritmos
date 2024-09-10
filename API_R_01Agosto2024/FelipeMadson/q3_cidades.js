import { questionFloat, questionInt } from 'readline-sync';

function main() {
  const numCities = questionInt("Quantas cidades você irá informar? ");
  let incomes = [];

  for (let i = 0; i < numCities; i++) {
    const income = questionFloat(`Digite a Renda Per Capita da cidade ${i + 1}: `);
    if (income === 0) break;
    incomes.push(income);
  }

  if (incomes.length === 0) {
    console.log("Nenhuma renda foi informada.");
    return;
  }

  const averageIncome = incomes.reduce((a, b) => a + b, 0) / incomes.length;
  const minIncome = Math.min(...incomes);
  const maxIncome = Math.max(...incomes);

  console.log(`\nRenda Média: R$ ${averageIncome.toFixed(2)}`);
  console.log(`Menor Renda: R$ ${minIncome.toFixed(2)}`);
  console.log(`Maior Renda: R$ ${maxIncome.toFixed(2)}`);
}

main();