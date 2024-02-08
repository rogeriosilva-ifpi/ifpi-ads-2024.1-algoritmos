print('>>>> Somatório de 1 a N <<<')

# Entrada
inicio = 1
final = int(input('Final: '))

# Processamento
qtd_pares = final / 2
soma_pares = inicio + final
somatorio = qtd_pares * soma_pares

# Saída
print(f'O somatório de {inicio} até {final} é {somatorio:.0f}')
