import { get_number, print } from "./utils/io_utils.js"
function main(){

    let opcao = 0
    let produtos = ""
    let cont = 0
    while(opcao != 3){

        print("\n------- Mercadinho Jota --------")
        print("1 - incluir intem \n2 - exibir lista \n3 - Sair")
        opcao = get_number("opcao: ")
        
        if(opcao == 1){
            cont++
            let n = String(cont)
            produtos += inserirNovoProduto(n)        
        } else if(opcao == 2){

        } else{
            print("saindo...")
        }

    }
}

function inserirNovoProduto(){
    
}

main()