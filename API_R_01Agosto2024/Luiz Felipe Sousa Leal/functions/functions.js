import { question } from "readline-sync";

function getNumber(mensagem){
    return Number(question(mensagem))
}

function getData(mensagem){
    return question(mensagem)
}

function print(mensagem){
    return console.log(mensagem)
}

function getPositiveNumber(numero){
    if (numero >= 0){
        return
    }else {
        throw new Error('Apenas valores positivos')
    }
}

function numberAletory(min, max){
    if (min > max) {
        throw new Error("Valor mínimo maior que o máximo");
    }
    
      return Math.floor(Math.random() * (max - min + 1)) + min;
}

export {getData, getNumber, print, getPositiveNumber, numberAletory}
