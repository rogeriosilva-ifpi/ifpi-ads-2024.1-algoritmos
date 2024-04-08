import { pede_numero_positivo, pergunta, print } from "./util.js"
function main(){
    let senha = 0
    let senha_antiga = senha
    let continuar = "N"
    while(continuar === "N"){
        let senha_antiga = senha
        senha = sortear_numero(senha)
        while(senha === senha_antiga && senha === (senha - 1) && senha === (senha + 1)){
            sortear_numero(senha)
        }
        const final = `
        ======================
        A senha obtida foi:
        ${senha}
        =======================
        `
        print(final)
        continuar = pergunta("Satisfeito com a Senha?(S/N): ").toUpperCase()
        while(continuar != "S" && continuar != "N"){
            print(`
            Resposta Invalida
            =================
            Digite "S" ou "N"!
            ==================
            `)
        }
    }
    console.clear()
    print(`
    ENCERRANDO PROGRAMA...
    `)
}

function sortear_numero(senha){
    const perguntar_digitos = pede_numero_positivo("Digite quantos digitos a senha ira possuir: ")
        let numero_maximo = 0
        let contador = 0
        while(contador < perguntar_digitos){
            if(numero_maximo === 0){
                contador ++
                numero_maximo += 10
            }
            else if(numero_maximo >= 10){
                contador++
                numero_maximo *= 10
            }
        senha = Math.floor(Math.random() * numero_maximo) + 1
        }
        return senha
}
main()