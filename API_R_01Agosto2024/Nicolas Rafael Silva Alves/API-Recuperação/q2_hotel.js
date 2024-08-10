import { ask, getNumberPositive,getNumber } from "./Funções/io.js"; // Importação das funções de IO

function calcularQuarto(num){

    if (num == 4){
        return 440
    } else if (num == 3){
        return 360
    } else if (num == 2){
        return 280
    } else {
        return 200
    }

}

function getNumberInRangeZero(message, min, max,text){
    const number = getNumber(message)
    
    if (number != 0){
      if (number < min || number > max){
        console.log(text)
        return getNumberInRangeZero(message, min, max,text)
      }
    }
      return number
  }

function main() {
    console.clear();

    //Apresentação
    let message = '\n[-----------Diária de Hotel-----------]\nDigita idade 0 para encerrar a entrada!\n'
    console.log(message);

    //Entrada
    console.log(">>>>>>>>>Primeiro Hospede<<<<<<<<<\n");

    let idade = getNumberInRangeZero("Digite sua idade(Permitido de 18 a 100 anos): ",18,100,"!Sua idade está fora do limite!");
    let numPessoas = 1;
    let diariaTotal = 0
    let primeiroZero = false

    while (idade != 0){
        if (primeiroZero && idade == 1) {
            console.log("\n>>>>>>>>>Proximo Quarto<<<<<<<<<\n");

            idade = getNumberInRangeZero("Digite sua idade(Permitido de 18 a 100 anos): ",18,100,"!Sua idade está fora do limite!");
            
            if (idade == 0) {
                break
            } else {
                primeiroZero = false
            }
        }

        console.log("\n>>>>>>>>>Proximo Hospede<<<<<<<<<\n");

        if (numPessoas >= 4){
            console.log("\n>>>>>>>>>Quarto Finalizado<<<<<<<<<\n")
            numPessoas = 0
            diariaTotal += calcularQuarto(numPessoas)
        }

        idade = getNumberInRangeZero("Digite sua idade(Permitido de 18 a 100 anos): ",18,100,"!Sua idade está fora do limite!");

        if (idade != 0){
            numPessoas++
        } else {
            console.log("\n>>>>>>>>>Quarto Finalizado<<<<<<<<<\n")
            calcularQuarto(numPessoas)
            numPessoas = 0
            primeiroZero = true
            idade = 1
        }
    }

    //Processamento
    let numNoites = getNumberPositive("Quantas noites serão reservadas: ")
    let valorTotal = diariaTotal * numNoites
    let valorParcelado = 0

    //Saída
    console.clear();

    message = (`
    ============================================
     • Valor Total: R$ ${valorTotal.toFixed(2)}
     • Pagamento PIX(5%): R$ ${(valorTotal - (valorTotal * 0.05)).toFixed(2)}
     • Parcelado de 4x a 12x: ${valorTotal.toFixed(2)}
    ============================================\n`);

    
    console.log(message);
    
    // Mensagem para limpar console apos finalizar programa
    if (! ask("Finalizar Programa?(Press Enter)"));
        console.clear();
}

main();