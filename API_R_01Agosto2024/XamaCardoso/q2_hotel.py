def get_number_in_range(minimo, maximo, text):
    n = int(input(text));
    if n == 0:
        return n;
    
    if n < minimo or n > maximo:
        print(f"Número inválido!! Digite um valor entre {minimo} e {maximo}!!");
        get_number_in_range(minimo,maximo,text);
    
    return n;

def formar_quarto(num):
    dias = int(input("Quantas noites é a reserva? "));
    preco = 200 + (80*num) * dias;
    taxajuros = 0.105;
    precojuros = preco + preco*taxajuros;
    precopix = preco - preco*0.05;
    print(f"""
============= NOVO QUARTO =====================
Pessoas                         : {num} pessoas
Preço via PIX (5% de desconto)  : R$ {precopix:.2f}
Preço em até 3x (sem Juros)     : R$ {preco:.2f}
Preço de 4x a 12x (com Juros)   : R$ {precojuros:.2f}
===============================================
""");


def main():
    qtd_pessoas = 0
    idade = 1
    while idade != 0:
        idade = get_number_in_range(18, 100, "Digite a idade do cliente: ")
        if idade != 0:
            qtd_pessoas += 1
            if qtd_pessoas == 4:
                formar_quarto(qtd_pessoas);
                qtd_pessoas = 0;

    if qtd_pessoas > 0:
        formar_quarto(qtd_pessoas);



main()
