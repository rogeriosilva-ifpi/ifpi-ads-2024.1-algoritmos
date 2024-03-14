export function percentual(valor, percentil){
  return valor * (percentil/100)
}

export function get_random_number(min, max){
  return Math.floor(Math.random() * (max - min)) + min
}