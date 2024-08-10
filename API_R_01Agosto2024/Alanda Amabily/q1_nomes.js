import {question} from 'readline-sync'

function main(){
    const nome = question('Seu nome: ')
    const ano_nascimento = Number(question('Seu ano de nascimento: '))

    const idade = 2024 - ano_nascimento

    const divisores = mostrar_divisores(idade)
    const primo = calcular_num_primo(idade)

    console.log(`----------------
        divisores do numero ${idade}: ${divisores}
        é primo: ${primo}`)


}
function mostrar_divisores(n){
    console.log(`DIVISORES DE ${n}: `)
    let a = n;
    let divisores = '';

    while(a > 0){
        if(eh_divisor(n,a)){
            divisores += `${a}`
        }
    }
    console.log(divisores);

}
function eh_divisor(n, a){
    return n % a === 0;
}
function calcular_num_primo(numero){
    let i = 2;
    while(i != numero){
        if( numero % i === 0){
            i++;
            return 'sim';
        }else if(numero % i != 0){
            return 'nao';

        }
}
}
main()