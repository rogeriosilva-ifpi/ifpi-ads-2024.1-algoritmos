def pegar_maior_divisor(num):
    divisor_primo = 0;
    count = 1;
    while (count <= num):
        if (count % 2 != 0 and count % 3 != 0 and count % 5 != 0 and count % 7 != 0):
            divisor_primo = count
        count += 1;

    return divisor_primo;

def main():
    nome = str(input("Qual é o seu nome? ")) + "\n";
    ano_nasc = int(input("Ótimo, agora digite em que ano você nasceu: "));
    idade = 2024 - ano_nasc;
    print(f"Sua idade é de {idade} anos.");
    count_divisores = 1;
    str_divisores = "";
    total_divisores = 0;
    soma_divisores = 0;
    while (count_divisores <= idade):
        if idade % count_divisores == 0:
            str_divisores += f"{count_divisores} ";
            total_divisores += 1;
            soma_divisores += count_divisores;

        count_divisores += 1;
    
    maior_divisor_primo = pegar_maior_divisor(idade);
    if maior_divisor_primo != 0:
        print(f"O maior divisor primo da sua idade é {maior_divisor_primo}, então\nirei exibir seu nome {maior_divisor_primo} vezes");
        print(nome * maior_divisor_primo);

    else:
        print("Não há divisores primos para a sua idade.");
        v = round((soma_divisores/total_divisores), 0);
        print(f"Irei mostrar seu nome {v} vezes.");
        print(f"{nome * v}");


main();