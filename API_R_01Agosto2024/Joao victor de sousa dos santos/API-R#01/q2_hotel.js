// q2_hotel

var input = require("readline-sync");

// variáveis para fins de cálculos
var num_quartos_singles = 0;
var num_quartos_duplos = 0;
var num_quartos_triplos = 0;
var num_quartos_quadruplos = 0;

// valores diárias
var diaria_single = 200;
var diaria_dupla = 280;
var diaria_tripla = 360;
var diaria_quadrupla = 440;

function main(){

    // entrada / processamento
    var idade = input.questionInt("> idade: ")
    
    var contador_idades_informadas = 0;
    var contador_de_zeros = 0;
    
    while(idade >= 18 && idade <= 100){
        
        contador_idades_informadas++;
        var idade = input.questionInt("> idade: ");

        // verificando se ja atingiu a quantidade máxima
        if (contador_idades_informadas == 4){
            num_quartos_quadruplos++;
            contador_idades_informadas = 0;
            continue;
        }
        
        // caso tenha finalizado a inserção de pessoas em um dos quartos
        if (idade == 0){
            idade = 18;     // para conseguir ir pro próximo loop
            // quarto finalizado
            contador_de_zeros++;
            incremente_um_dos_quartos(contador_idades_informadas);
            contador_idades_informadas = 0;
        }

        // se informar 2 zeros, finalizou a reserva
        if (contador_de_zeros > 1){
            break;
        }
    }

    // cálculos de pagamentos
    var quantidade_de_noites = input.questionInt("\n> quantidade de noites: ")
    var valor_da_diaria = calcular_valor_diaria();
    var valor_total_reserva = quantidade_de_noites * valor_da_diaria;
    var valor_via_pix = valor_total_reserva - (valor_da_diaria*0.05);
    var valor_cartao_credito = valor_da_diaria / 3;
    var valor_com_parcelas_3_a_12 = valor_total_reserva + (valor_total_reserva*0.105);

    // resultados finais
    var resultado = `
    ----------------------- ficha de valores -----------------------
    > Valor total por dia:     R$ ${valor_da_diaria.toFixed(2)}
    > Valor total da reserva:  R$ ${valor_total_reserva.toFixed(2)}
    > Valor pagamento via pix: R$ ${valor_via_pix.toFixed(2)}
    > Valor c.crédito em 3x:   R$ ${valor_cartao_credito.toFixed(2)}
    > Valor final com 4x ou + parcelas: R$ ${valor_com_parcelas_3_a_12.toFixed(2)}`

    console.log(resultado)
}

// função para calcular o valor diário de uma reserva feita
function calcular_valor_diaria(){
    return (diaria_single * num_quartos_singles) +
           (diaria_dupla * num_quartos_duplos) +
           (diaria_tripla * num_quartos_triplos) +
           (diaria_quadrupla * num_quartos_quadruplos);
}

// função que incrementa mais 1 quanrto de acordo com a quantidade de pessoas
function incremente_um_dos_quartos(contador_idades){
    switch (contador_idades){
        case 1:
            num_quartos_singles++;
            break;
        case 2:
            num_quartos_duplos++;
            break;
        case 3:
            num_quartos_triplos++;
    }
}

main();