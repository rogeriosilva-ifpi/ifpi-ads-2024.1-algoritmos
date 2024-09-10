import { question, questionInt } from 'readline-sync';

function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function getDivisors(num) {
  const divisors = [];
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) divisors.push(i);
  }
  return divisors;
}

function getLargestPrimeDivisor(divisors) {
  return divisors.filter(isPrime).pop() || null;
}

function printNameNTimes(name, n) {
  for (let i = 0; i < n; i++) {
    console.log(name);
  }
}

function calculateAverageDivisor(divisors) {
  return Math.floor(divisors.reduce((a, b) => a + b, 0) / divisors.length);
}

function main() {
  const name = question("Digite seu nome: ");
  const birthYear = questionInt("Digite seu ano de nascimento: ");
  const currentYear = new Date().getFullYear();
  const age = currentYear - birthYear;

  console.log(`Sua idade é: ${age} anos`);

  const divisors = getDivisors(age);
  console.log("Divisores da sua idade:", divisors.join(", "));

  const largestPrimeDivisor = getLargestPrimeDivisor(divisors);

  if (largestPrimeDivisor) {
    console.log(`O maior divisor primo é: ${largestPrimeDivisor}`);
    console.log(`Mostrando seu nome ${largestPrimeDivisor} vezes:`);
    printNameNTimes(name, largestPrimeDivisor);
  } else {
    console.log("Não há números primos entre os divisores da sua idade.");
    const averageDivisor = calculateAverageDivisor(divisors);
    console.log(`Mostrando seu nome ${averageDivisor} vezes (média dos divisores):`);
    printNameNTimes(name, averageDivisor);
  }
}

main();