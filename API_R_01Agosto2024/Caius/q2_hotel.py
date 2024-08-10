qtd_quartos = 0
qtd_pessoas = 0

print("Bem vindos ao hótel da delicia!")

idade_pessoas = int(input("Digite a idade do hóspede: "))
while idade_pessoas != 0:
    idade_pessoas = int(input("Digite a idade do hóspede: "))
    if idade_pessoas < 18 or idade_pessoas > 100:
        print("Não é permitido pessoas desta idade neste hotel.")
    else:
        qtd_pessoas += 1
        qtd_quartos += 1
        print(f"Idade permitida, adicionando no quarto {qtd_quartos}")
    if qtd_pessoas == 4:
        print("O quarto foi totalmente preenchido")
else:
    print("Contagem de hóspedes encerrada")