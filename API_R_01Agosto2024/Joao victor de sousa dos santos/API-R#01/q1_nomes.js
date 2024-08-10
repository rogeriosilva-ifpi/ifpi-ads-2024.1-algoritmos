// q1_nomes

var input = require("readline-sync");

function main(){

    // entrada de dados
    var nome = input.question("\n> Informe seu nome: ");
    var ano_nascimento = input.questionInt("> Informe seu ano de nascimento: ");

    // processamento
    var idade = calcular_idade(ano_nascimento);
    console.log(`\n> Sua idade: ${idade}`)
    
    // exibindo divisores
    var maior_divisor_primo = null;
    var contador = 1;
    var somatorio_divisores = 0;
    var contador_divisores = 0;
    var media_divisores;
    
    console.log("> divisores:")
    while (contador < idade){
        var eh_divisor = idade % contador == 0;
        if (eh_divisor){
            console.log(contador);
            if (eh_primo(contador)){
                maior_divisor_primo = contador;
            }
            somatorio_divisores += contador;
            contador_divisores++;
        }
        contador++;
    }

    media_divisores = somatorio_divisores / contador_divisores;

    // se existir um maior divisor primo
    if (maior_divisor_primo != null){
        console.log(`\n> maior divisor primo: ${maior_divisor_primo}\n> imprindo seu nome ${maior_divisor_primo} vezes: `)
        var contador = 1;
        var d_vezes = maior_divisor_primo;
        while (contador <= d_vezes){
            console.log(nome)
            contador++;
        }
        return;
    } 
    
    console.log(`\n> media dos divisores: ${media_divisores.toFixed(2)}\n> imprindo seu nome ${media_divisores} vezes: `)
    // imprimindo o nome V_vezes(média dos divisores)
    var contador = 1;
    var v_vezes = media_divisores;
    while(contador <= v_vezes){
        console.log(nome);
        contador++;
    }

}

// verifica se um valor é primo
function eh_primo(valor){
    if (valor == 1){
        return false
    } else if (valor ==2 || valor==3){
        return true
    } else if ((valor % 2)==0 || (valor % 3)==0){
        return false
    } else{
        return true
    }
}

// calcula a idade
function calcular_idade(ano_nascimento){
    const ano_atual = 2024;
    return ano_atual - ano_nascimento;
}

main();