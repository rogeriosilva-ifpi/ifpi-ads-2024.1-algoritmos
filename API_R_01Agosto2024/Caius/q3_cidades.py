cidade_atual = 1
renda_base = 0
renda_atual = 0

n_cidades = int(input("Quantas cidades participarão da pesquisa: "))
while cidade_atual <= n_cidades:
    renda_atual = int(input(f"Digite (em R$) qual a renda da cidade {cidade_atual}: "))
    renda_atual += renda_atual
    cidade_atual += 1
    if renda_atual == 0:
        print("Contagem encerrada")
        continue

renda_media = (renda_atual/n_cidades)

print(f"A renda total é R${renda_atual:.2f}")
print(f"A renda média é R${renda_media:.2f}")

# Me perdi ao codificar a menor renda e maior renda ---------