def main():
    quantidade_de_cidades = int(input("Quantas cidades ira informar?: "));
    if quantidade_de_cidades == 0:
      print("fim de programa...");
    else:
        contador = 0;
        rendatotal = 0;
        renda = 0;
        renda_anterior = 0;
        maior_renda = 0;
        menor_renda = 0;
        while contador != quantidade_de_cidades:
            contador += 1;
            renda = int(input(f"Informe o valor da cidade {contador}: "));
            rendatotal += renda
            if renda == 0:
                break;
            else: 
                if renda > renda_anterior:
                    maior_renda = renda;
                    menor_renda = renda_anterior
                
            renda_anterior = renda
            renda_media = rendatotal / contador;
            
    print(f'''
    Renda Media: {renda_media}
    Maior Renda: {maior_renda}
    Menor Renda: {menor_renda}
''');
            
      
main()