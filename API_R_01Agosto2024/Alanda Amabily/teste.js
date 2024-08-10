import {question} from 'readline-sync'

function main(){
    console.log('---calculando renda per carpita----')
    const num_cidades = Number(question('numero de cidades: '))

    let somatorio_cidades = 0;
    let somatorio_rendas = 0;

    let menor_renda = 0;
    let maior_renda = 0;

    let renda = 0;

    while(somatorio_cidades < num_cidades && renda != 0){
        renda = Number(question('renda: '))
        somatorio_cidades += 1 
        somatorio_rendas = somatorio_rendas + renda  
            if (renda > maior_renda){
                maior_renda = renda
            }else if(renda < maior_renda){
                menor_renda = renda
            }
            renda = Number(question('renda: ')) 

        }   
    const renda_media = somatorio_rendas / somatorio_cidades


    console.log(
    `---------------------------
    renda média: ${renda_media}
    menor renda: ${menor_renda}
    maior renda: ${maior_renda}
    ---------------------------`)

}
main()