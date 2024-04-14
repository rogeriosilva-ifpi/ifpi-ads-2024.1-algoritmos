import { get_number_random, get_text, print } from "../Utils/utils.js";

// NÃO TÁ VALIDANDO OS DIGITOS
function main() {
    const TAMANHO_SENHA = 1_000_000;
    let senha = get_number_random(TAMANHO_SENHA);

    print(`Sua senha já foi gerada. Sendo ela ${senha}.`);
    let respostaUsuario = get_text(`Você aceita essa senha: ${senha} ? Se sim digite "S" se nao digite "N":  `).toUpperCase();

    while(respostaUsuario !== `S`) {
        senha = get_number_random(TAMANHO_SENHA);
        print(`Sua nova senha já foi gerada. Sendo ela ${senha}.`);
        respostaUsuario = get_text(`Você aceita essa senha: ${senha} ? Se sim digite "S" se nao digite "N":  `).toUpperCase();
    }

    print(`Você desejou ficar com a senha ${senha}. Programa encerrando...\n`);
}

main();