def main():
    count = 1;
    n_cidades = int(input("Quantas cidades deseja computar? "));
    somarenda = 0;
    maior_renda = -9999999999999;
    menor_renda = 9999999999999;
    while (count <= n_cidades):
        renda = float(input(f"Renda da cidade {count} (R$): "));
        if renda != 0:
            if renda > maior_renda:
                maior_renda = renda;
            if renda < menor_renda:
                menor_renda = renda;

            somarenda += renda;
            count+=1;
            continue;
        
        break;
    
    if count > 1:
        print(f"""

    =============== RESULTADO ==================          
    N° de cidades: {count-1}
    Renda média  : R$ {(somarenda/(count-1)):.2f}
    Maior renda  : R$ {maior_renda:.2f}
    Menor renda  : R$ {menor_renda:.2f}
""");


main();