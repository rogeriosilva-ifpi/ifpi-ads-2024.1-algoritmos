import { get_text, print } from '../utils/io_utils.js'

function main(){
  const frase = get_text('Frase: ')

  const frase_limpa = remover_espacos(frase)
  const frase_upper = texto_em_caixa_alta(frase_limpa)
  const frase_inversa = inverter_frase(frase_upper)

  print(frase_limpa)
  print(frase_upper)
  print(frase_inversa)
}

function remover_espacos(texto){
  let nova_frase = ''
  for (let caractere of texto){
    if (caractere.charCodeAt() !== 32){
      nova_frase += caractere
    }
  }

  return nova_frase
}


function texto_em_caixa_alta(frase){
  let nova_frase = ''

  for (let c of frase){
    nova_frase += to_uppercase(c)
  }

  return nova_frase
}


function eh_letra_minuscula(c){
  return c.charCodeAt() >= 97 && c.charCodeAt() <= 122
}

function eh_letra_maiuscula(c){
  return c.charCodeAt() >= 65 && c.charCodeAt() <= 90
}


function to_uppercase(c){
  if (eh_letra_minuscula(c)){
    const codigo = c.charCodeAt() - 32
    const novo_c = String.fromCharCode(codigo)
    return novo_c
  }

  return c
}


function inverter_frase(frase){
  let nova_frase = ''

  for (let c of frase){
    nova_frase = c + nova_frase
  }

  return nova_frase
}


main()