from unittest import result


def main():
  idade = int(input('idade: '))
  quarto_atual = 0
  simples, duplo, triplo, quadruplo = 0, 0, 0, 0

  while quarto_atual > 0 or (quarto_atual == 0 and idade > 0):
    
    if idade > 0:
      quarto_atual += 1

    # computar novo quarto
    if idade == 0 or quarto_atual == 4:
      if quarto_atual: 
        print("Novo Quarto Registrado")
      
      # Tipo:
      simples += 1 if quarto_atual == 1 else 0
      duplo += 1 if quarto_atual == 2 else 0
      triplo += 1 if quarto_atual == 3 else 0
      quadruplo += 1 if quarto_atual == 4 else 0
      
      # zerar quanto
      quarto_atual = 0

    idade = int(input('idade: '))
  
  print('Fim')

  result = f'''
    Simples = {simples}
    Duplos = {duplo}
    Triplos = {triplo}
    Quadruplos = {quadruplo}
  '''
  print(result)


main()