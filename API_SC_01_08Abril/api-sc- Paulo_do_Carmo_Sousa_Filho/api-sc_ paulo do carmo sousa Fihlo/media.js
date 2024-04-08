import { question } from "readline-sync";
function main(){

    
    print(`
    ------  Digite: ------
    (f) Feminino
    (m) Masculino
    `)
    

    //WHILE GUARDAR NOTAS
    let sexo = 'f'
    let nota
    let maior_nota = 0
    let menor_nota = 0
    let somatorio_notas
    while(!(sexo == 'f' & sexo == 'm') ){
        let nota = question('Informe nota: ')
        sexo = get_number('Informe sexo: ')
        
        //CONDICIONAL MAIOR/MENOR NOTA
        if(nota >= maior_nota){
            maior_nota = nota
        }if (nota < menor_nota){
            menor_nota = nota
        }
        somatorio_notas += nota
        print(`Maior nota: ${maior_nota}`)
}
}


function get_number(mensagem){
    const n = Number(question(mensagem))
    return n 
}

function print(mensagem){
    return console.log(mensagem)
}
main()