import { GetNumberIntegerBetween , print} from "./utils.js"

function VerificarAntecessorSucessor(Numero1, Numero2){//função que verifica o antecessor e sucessor de um número e retorna um valor boolenao comparando com outro 
    const Antecessor = Numero1 - 1
    const Sucessor = Numero1 + 1

    return (Antecessor === Numero2) || (Sucessor === Numero2)
}


function GeradorSenha(Digitos){//função rsponsavel pela geração de senha

    let ContadorDigitos = 0
    let Senha = ''
    let DigitoAnterior = 10//como 10 não aparecerá e o digito anterior vai ser substituido depois...

    //while a construção da senha
    while(ContadorDigitos < Digitos){
        ContadorDigitos++
        

        let DigitoAleatorio = parseInt((Math.random() * 10) )//gera um digito aleatorio entre 0 e 9

        //while que verifica as regras de antecessor,sucessor e igual
        while(VerificarAntecessorSucessor(DigitoAleatorio,DigitoAnterior) || (DigitoAleatorio === DigitoAnterior)){

            DigitoAleatorio = parseInt((Math.random() * 10))
        }

        //a senha vai ser a concatenação de varios digitos
        Senha = Senha + String(DigitoAleatorio)
        DigitoAnterior = DigitoAleatorio

    }

    return Senha
}


function main(){
    //dados de entrada, o tamanho da senha 
    const NumeroDigitosSenha = GetNumberIntegerBetween('Informe o tamanho da senha[digítos]: ',0)
    
    //dados pre iteração no while
    let RespostaUsuario = 0
    let SenhaGerada = ''

    while(RespostaUsuario === 0){
        SenhaGerada = GeradorSenha(NumeroDigitosSenha)//gera uma senha para o usuario

        print(`A senha sugerida é: [${SenhaGerada}]`)
        RespostaUsuario = GetNumberIntegerBetween('Você está satisfeito(a) com a senha[SIM(1) | NÃO(0)]: ',0,1)//confirmação ou negação do usuario
    }

    //saida, informa a senha final para ele
    print(`A SENHA GERADA FOI: [${SenhaGerada}]`)

}


main()