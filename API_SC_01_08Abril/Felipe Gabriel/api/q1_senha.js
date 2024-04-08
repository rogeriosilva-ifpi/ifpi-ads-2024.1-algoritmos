import { question } from "readline-sync"

function main() {
    let autorizar = question("Deseja gerar uma senha?(s/n): ")
    retornar_senha(autorizar)
    console.log(">Finalizando programa...")
}
function retornar_senha(autorizar) { 
    while (autorizar.toLocaleLowerCase() == "s") {
        let senha1 = Math.floor(Math.random() * 10)
        let senha2 = Math.floor(Math.random() * 10)
        while (senha2 == senha1 || senha2 == senha1 + 1 || senha2 == senha1 - 1) {
            senha2 = Math.floor(Math.random() * 10)
        }
        let senha3 = Math.floor(Math.random() * 10)
        while (senha3 == senha2 || senha3 == senha2 + 1 || senha3 == senha2 - 1) {
            senha3 = Math.floor(Math.random() * 10)
        }
        let senha4 = Math.floor(Math.random() * 10)
        while (senha4 == senha3 || senha4 == senha3 + 1 || senha4 == senha3 - 1) {
            senha4 = Math.floor(Math.random() * 10)
        }
        let senha5 = Math.floor(Math.random() * 10)
        while (senha5 == senha4 || senha5 == senha4 + 1 || senha5 == senha4 - 1) {
            senha5 = Math.floor(Math.random() * 10)
        }
        let senha6 = Math.floor(Math.random() * 10)
        while (senha6 == senha5 || senha6 == senha5 + 1 || senha6 == senha5 - 1) {
            senha6 = Math.floor(Math.random() * 10)
        }
        console.log(`Sua senha é: ${senha1}${senha2}${senha3}${senha4}${senha5}${senha6}`)
        autorizar = question("Deseja gerar uma nova senha?(s/n): ")
    }
}
main()