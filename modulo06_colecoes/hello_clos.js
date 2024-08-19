function main(){
  const soma_com_5 = gerar_soma_com(500)
  const soma_com_22 = gerar_soma_com(22)

  const resultado = soma_com_5(10)
  const resultado2 = soma_com_22(10)

  console.log(resultado)
  console.log(resultado2)
}

function gerar_soma_com(valor){
  
  function interna(numero){
    return  numero + valor
  }
  
  return interna
}

main()