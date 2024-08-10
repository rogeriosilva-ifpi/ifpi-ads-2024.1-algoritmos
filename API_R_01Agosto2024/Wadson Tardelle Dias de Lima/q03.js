import { getNumber, print} from "./functions.js";

function main() {
const qtdCidades = getNumber("Iforme a quantidades de cidades que você deseja calcular a reda percápita: (inserra se o número for 0)");

let menorRenda = Infinity;
let maiorRenda = -Infinity;
let somatorioRendas = 0;
let contador = 1;
while(contador <= qtdCidades) {
    let renda = getNumber(`renda da cidade${contador}: `);
    
    if (renda === 0) {
        break;
    }
    somatorioRendas+= renda;

    if(renda > maiorRenda) {
        maiorRenda = renda;
    }
    if(renda < menorRenda) {
        menorRenda = renda;
    }
    contador ++;
}

const media = somatorioRendas / contador;

print(`a Renda média das cidades informadas é R$${media}`);
print(`A renda mais baixa registrada é de R$${menorRenda}`);
print(`A renda maior registrada foi de R$${maiorRenda}`);
}
main();
