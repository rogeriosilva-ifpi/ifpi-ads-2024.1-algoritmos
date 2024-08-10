print("BEM-VINDO AO ENZOAPP")

print("=" * 20)
var renda_per_capita_cidades = int(input("Quantas cidades você quer ler a renda per capita? "))
var count = 0
var renda_total = 0
var menor_renda = 0
var maior_renda = 0
print("=" * 20)

def main():
    while count < renda_per_capita_cidades:
        count += 1
        var renda = int(input("Qual o valor da renda dessa cidade? "))
        renda_total += renda

        if renda == 0 or count > renda_per_capita_cidades:
            print("Programa encerrado aqui")
            renda_media(renda_total, renda_per_capita_cidades)
    
            maior_renda_calcular(renda_total,count)

            return menor_renda_calcular(renda_total,count)



def renda_media(n1, n2):
    var media = n1 / n2
    print("A renda média é igual a {:.2f}".format(media))

def maior_renda_calcular(n1, n2):
    var calculo = ((n1 * n2) - (n1 * (n2 - 1)))
    print("A menor renda é {:.2f}".format(calculo))

def menor_renda_calcular(n3, n4):
    var calculo2 = ((n3 * (n4 + 2)) - (n3 * n4))
    print("A menor renda é {:.2f}".format(calculo2))

main()