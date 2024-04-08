const { question } = require("readline-sync");

function main(){
    const DigitosSenha = question("Digite a quantidade de digitos da senha: ");
    let Numero = parseInt(Math.random() * 10);
    let NumeroAnterior = 0;
    let SenhaDefinida = "";
    let Digitos = 0;
    while(Digitos <= DigitosSenha ){
        if(Numero != NumeroAnterior){
            SenhaDefinida+=Numero;
            Digitos++;
        }
        if(Digitos == DigitosSenha){
            console.log(`|---> SENHA GERADA: ${SenhaDefinida}`)
            let ConfirmarSenha = Number(question("VOCÊ QUER CONFIRMAR A SENHA: (1) PARA SIM; (2) PARA NÃO;"))
            if(ConfirmarSenha == 2){
                Digitos = 0;
                SenhaDefinida = "";
            }
        }
        NumeroAnterior = Numero;
        Numero = parseInt(Math.random() * 10);
    }

    console.log(`
    -------------- RESULTADO DA SENHA GERADA ------------------
    | ---> SUA SENHA É: ${SenhaDefinida}
    ------------------------------------------------------------`)

}main();