/*1. [q1_nomes] Faça um pequeno joguinho de "Printar Nome N Vezes". Pergunte o nome e o ano de
nascimento do usuário. Mostre a ele sua idade. Depois mostre todos os divisores da idade dele.
Verifique o maior divisor D que também seja primo, e se houver, mostre o nome do usuário D
vezes. Caso negativo, diga, não há números primos entre os divisores da sua idade, devido a isso
vou mostrar seu nome V vezes, onde V é a média dos divisores da idade.
*/

import { getNumber, getString, print } from "./functions.js";
function isPrime(num) {
    if (num <= 1) return false;
    let i = 2;
    while(i <= Math.sqrt(num)) {
        if (num % i === 0) return false;
        i++;
    }
    return true;
}

function main() {
    const nome = getString("Digite seu nome: ");
    const nascimento = getNumber("Ano de nascimento: ");
    const anoAtual = 2024;
    const idade = anoAtual - nascimento;
    
    print(`Você tem ${idade} anos.`);
    
    let somaDivisores = 0;
    let numeroDivisores = 0;
    let maiorDivisorPrimo = -1;
    let i = 1;
    
    while (i <= idade) {
        if (idade % i === 0) {
            print(`${i}`);
            somaDivisores += i;
            numeroDivisores++;
            if (isPrime(i)) {
                maiorDivisorPrimo = i;
            }
        }
        i++;
    }
    
    if (maiorDivisorPrimo !== -1) {
        print(`O maior divisor primo da sua idade é ${maiorDivisorPrimo}.`);
        print(`Mostrando o nome ${maiorDivisorPrimo} vezes:`);
        let j = 0;
        while (j < maiorDivisorPrimo) {
            print(nome);
            j++;
        }
    } else {
        print("Não há números primos entre os divisores da sua idade.");
        // Calcular a média dos divisores
        const mediaDivisores = Math.floor(somaDivisores / numeroDivisores);
        print(`Devido a isso, vou mostrar seu nome ${mediaDivisores} vezes:`);
        let k = 0;
        while (k < mediaDivisores) {
            print(nome);
            k++;
        }
    }
}

main();
