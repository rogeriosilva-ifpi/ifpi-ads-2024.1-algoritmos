import { get_number_min, mostre, positive_number } from '../quest/utils.js'

function main(){
    let digitos = get_number_min('Insira o número de dígitos que deseja para sua senha:  ',0)
    let perguntar = get_1or2('Digite 1 para gerar senha ou 2 para sair.')

    let algarismo = 9
    while(digitos > 0 && perguntar !=2){
        digitos--
        algarismo--
        let senha_anterior
        let primeiro_algsenha_ant = Math.floor(senha_anterior/(algarismo*10^(algarismo-1))

        if(algarismo!=primeiro_algsenha_ant && algarismo<10 && algarismo>0){
            mostre(algarismo)
            let algarismo_anterior = algarismo
            algarismo = Math.floor((algarismo-3)*2/ algarismo)
            if(algarismo != algarismo_anterior && algarismo != algarismo_anterior + 1 && algarismo != algarismo_anterior-1 && algarismo<10 && algarismo>0 ){
                mostre(`/n ${algarismo}`)
            }
        }

    }


}