import { get_positive_number, print } from '../utils/io_utils.js';

function main(){

  const qtd = get_positive_number('Quantidade de Famílias: ')
  let soma_salario = 0, soma_filhos = 0, qtd_minima = 0;

  for(let i = 0; qtd > i; i++){
    const salario = get_positive_number('Renda Familiar R$: ')
    const filhos = get_positive_number('Quat. de Filhos: ')

    soma_salario += salario
    soma_filhos += filhos
    if (salario <= 1000){
      qtd_minima++
    }
  }

  const result = `
  Relatório:
  Média Salarial  : R$ ${(soma_salario/qtd).toFixed(2)}
  Média Qtd Filhos:  ${(soma_filhos/qtd).toFixed(1)}
  Famílias Renda Min.: ${(qtd_minima/qtd*100).toFixed(1)}% 
  `

  print(result)

  print('Fim.')
}

main()