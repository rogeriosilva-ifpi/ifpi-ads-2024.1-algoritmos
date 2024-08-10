/*
2. [q2_hotel] Em um hotel as diárias são de acordo com tipo do quarto, se Single (uma pessoa), se
Duplo (duas pessoas) ou Triplo. O Hotel suporta no máximo 4 pessoas por quarto.
Faça um programa que automaticamente vai acomodando pessoas em Quartos. O usuário
simplesmente digitando idades (mínimo 18 anos e máximo 100 anos). Não é permitido menores,
nem maiores que 100. Quando for digitado 0 na idade, significa que quarto atual finalizado.
Quando alcançar 4 pessoas automaticamente deve-se computar um quarto e iniciar um novo. Se
em um quarto novo digitar-se 0 como primeiro hóspede, significa fim da reserva. Ou seja, depois 0
seguidos é o fim.
*/

import { getNumber } from "./functions.js";

function main() {
    let single = 0;
    let duplo = 0;
    let triplo = 0;

    while (true) {
        let contadorquarto = 0;
        let numHospedes = 0;
        
        while (contadorquarto < 4) {
            const idade = getNumber("Informe a idade: ");
            
            if (idade === 0) {
                if (numHospedes === 0) {
                    // Fim da reserva
                    print("Fim da reserva.");
                    print(`Quartos Single: ${single}`);
                    print(`Quartos Duplo: ${duplo}`);
                    print(`Quartos Triplo: ${triplo}`);
                    return;
                } else {
                    // Finalizar o quarto atual
                    break;
                }
            } else if (idade < 18 || idade > 100) {
                print(`Não é permitido pessoa com ${idade} anos neste hotel. Informe outra: `);
            } else {
                numHospedes++;
                contadorquarto++;
            }
        }

        // Categorizar o quarto
        if (numHospedes === 1) {
            single++;
        } else if (numHospedes === 2) {
            duplo++;
        } else if (numHospedes === 3 || numHospedes === 4) {
            triplo++;
        }
    }
}

main();
