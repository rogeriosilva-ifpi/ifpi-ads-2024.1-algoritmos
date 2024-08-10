nome_usuario = input("Qual seu nome: ")
ano_nascimento = int(input('Qual seu ano de nascimento: '))

idade = 2024 - ano_nascimento

print(f'{nome_usuario}, sua idade é de {idade} anos')

c = 0
while idade % 2 == 0:
    c += 1
    print(c)