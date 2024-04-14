import { question, questionInt } from 'readline-sync';
// charAt?
// for?
function gerarSenha(tamanho) {
    let senha = '';

    for (let i = 0; i < tamanho; i++) {
        let digito = Math.floor(Math.random() * 10).toString();

        while (
            digito === senha.charAt(senha.length - 1) ||
            (senha.length > 0 && Math.abs(parseInt(digito) - parseInt(senha.charAt(senha.length - 1))) === 1)
        ) {
            digito = Math.floor(Math.random() * 10).toString();
        }

        senha += digito;
    }

    return senha;
}

function main() {
    console.log("Gerador de Senhas Numéricas");

    const tamanhoSenha = questionInt("Digite o tamanho da senha numérica desejada: ");

    let senha = gerarSenha(tamanhoSenha);

    let resposta = question("Sua senha sugerida é: " + senha + "\nVocê está satisfeito com esta senha? (Sim/Não): ");
    
    while (resposta.toLowerCase() !== "sim") {
        senha = gerarSenha(tamanhoSenha);
        resposta = question("Sua nova senha sugerida é: " + senha + "\nVocê está satisfeito com esta senha? (Sim/Não): ");
    }

    console.log("Senha finalizada:", senha);
}

main();
