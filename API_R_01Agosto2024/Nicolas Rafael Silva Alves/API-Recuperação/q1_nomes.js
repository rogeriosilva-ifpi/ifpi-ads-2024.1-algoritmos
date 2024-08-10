import { ask, getNumberPositive } from "./Funções/io.js"; // Importação das funções de IO

function calcular_Primo(li, ls) {
    let primo = 0

    for (let num = li + 1; num <= ls; num++) {
        let ehPrimo = true

        for (let divisor = 2; divisor <= Math.sqrt(num); divisor++) {
            if (num % divisor === 0) {
                ehPrimo = false;
                break
            }
        }

        if (ehPrimo) {
            primo = num
            
        if (num > primo){
            primo = num
        }
        }
    }

    return primo
}




function main() {
    console.clear();

    //Apresentação
    let message = '\n[-----------Printar Nomes Game-----------]\n'
    console.log(message);

    //Entrada
    let nome = ask("Digite seu nome: ")
    let idade = getNumberPositive("Digite sua idade: ")


    //Processamento
    let count = 1
    let divisores = count
    let numDivisores = 0


    console.log(`\nSua idade é ${idade}\n`)

    while (count <= idade){
        var divisão = idade/count
        var int = Math.ceil(divisão)
        var resto = Math.abs(divisão - int)

        if ( resto === 0 && count != 1){
            numDivisores++
            divisores += ", " + count
        }
        count++
    }
    
    let mediaDivisores = divisores/numDivisores

    //Saída

    console.log("Divisores: ", divisores)

    if (calcular_Primo != 0){
        var primo = calcular_Primo
        while (primo <= 0)
            primo--
            console.log(nome)
    } else {
        while (mediaDivisores <= 0)
            mediaDivisores--
            console.log(nome)
    }
    
    // Mensagem para limpar console apos finalizar programa
    if (! ask("Finalizar Programa?(Press Enter)"));
        console.clear();
}

main();