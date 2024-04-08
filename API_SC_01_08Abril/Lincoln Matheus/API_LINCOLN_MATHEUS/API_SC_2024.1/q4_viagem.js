import { get_number, get_text, porcentagem, print } from "../Utils/utils.js";

function main() {
    const ORIGEM = get_text(`Digite de onde voce esta partindo: `).toUpperCase();
    const DESTINO = get_text(`Digite para onde voce deseja ir: `).toUpperCase();
    const VALOR_REAIS = get_number(`Digite quanto custa(R$) o valor da viagem no site: `);
    const VALOR_MILHAS_SITE = get_number(`Digite o valor em milhas do site: `);
    const VALOR_MILHEIRO_PADRAO = 0.07;
    const VALOR_MILHEIRO_BARATO = 0.0145;

    let valorMilhasPadraoEmReal = VALOR_MILHAS_SITE * VALOR_MILHEIRO_PADRAO;
    let valorMilhasBaratasEmReal =  VALOR_MILHAS_SITE * VALOR_MILHEIRO_BARATO;

    let percentualMilhasPadrao = porcentagem(valorMilhasPadraoEmReal, VALOR_REAIS);
    let percentualMilhasBaratas = porcentagem(valorMilhasBaratasEmReal, VALOR_REAIS);

    let melhorEscolha = verificarMelhorEscolha(VALOR_REAIS, valorMilhasPadraoEmReal, valorMilhasBaratasEmReal);

    print(`
    ----------------------------------------------------------------------------
    >>>>>>>>>>>>>>>>                MELHOR ESCOLHA              >>>>>>>>>>>>>>>>
    
    -> Origem: -----------------------------------------           ${ORIGEM}
    -> Destino: ----------------------------------------           ${DESTINO}
    -> Valor em Reais   --------------------------------           R$:${VALOR_REAIS.toFixed(2)}
    -> Valor em Milhas  --------------------------------           ${VALOR_MILHAS_SITE}

    -> Valor em Milhas Padrão(R$)   --------------------           R$:${valorMilhasPadraoEmReal.toFixed(2)}
    -> Valor em Milhas Baratas(R$)  --------------------           R$:${valorMilhasBaratasEmReal.toFixed(2)}
    -> Percentual de Milhas P. em relação a Valor em R$            ${percentualMilhasPadrao.toFixed(2)}%
    -> Percentual de Milhas B. em relação a Valor em R$            ${percentualMilhasBaratas.toFixed(2)}%
    
    ___________________________________________________________________________
    
    Logo, podemos concluir que a Melhor Escolha é:  ---            ${melhorEscolha}!\n`);


}

function verificarMelhorEscolha(opcao1, opcao2, opcao3) {
    let melhor = ``;

    if(opcao1 < opcao2 && opcao1 < opcao3) {
        melhor = `Valor em Reais(R$)`;
    } else if(opcao2 < opcao1 && opcao2 < opcao3) {
        melhor = `Valor em Milhas Padrão`;
    } else if (opcao3 < opcao1 && opcao3 < opcao2) {
        melhor = `Valor em Milhas Baratas`;
    }

    return melhor;
}

main();